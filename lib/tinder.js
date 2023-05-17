"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinderClient = void 0;
const uuid_1 = require("uuid");
const android_fingerprints_1 = __importDefault(require("android-fingerprints"));
const crypto_1 = __importDefault(require("crypto"));
const querystring_1 = __importDefault(require("querystring"));
const socks_proxy_agent_1 = require("socks-proxy-agent");
const proto_1 = require("./proto");
const node_fetch_1 = __importDefault(require("node-fetch"));
const randomDevice = () => {
    return android_fingerprints_1.default[Math.floor(Math.random() * android_fingerprints_1.default.length)];
};
const generateAppsFlyerId = () => {
    return (Math.floor(Math.random() * 1e13)
        .toString(10)
        .substr(0, 13) +
        "-" +
        (Math.floor(Math.random() * 1e16).toString(10) +
            Math.floor(Math.random() * 1e3).toString(10)).substr(0, 19));
};
class TinderClient {
    constructor({ userAgent, proxyOptions, persistentDeviceId, appSessionId, appSessionStartTime, installId, encodedDeviceModel, encodedDeviceCarrier, mobileCountryCode, mobileNetworkCode, tinderVersion, storeVariant, osVersion, appVersion, platform, platformVariant, language, token, funnelSessionId, appsFlyerId, advertisingId, refreshToken, userId, onboardingToken, xAuthToken, userSessionId, userSessionStartTime, } = {}) {
        this.proxyOptions = proxyOptions || null;
        this.refreshToken = refreshToken || null;
        this.persistentDeviceId =
            persistentDeviceId || crypto_1.default.randomBytes(8).toString("hex");
        this.appSessionId = appSessionId || (0, uuid_1.v1)();
        this.appSessionStartTime = appSessionStartTime || null;
        this.installId = installId || crypto_1.default.randomBytes(8).toString("base64");
        this.encodedDeviceModel =
            encodedDeviceModel ||
                Buffer.from(randomDevice().device).toString("base64");
        this.encodedDeviceCarrier =
            encodedDeviceCarrier || Buffer.from("wifi").toString("base64");
        this.mobileCountryCode = mobileCountryCode || 310;
        this.mobileNetworkCode = mobileNetworkCode || 240;
        this.tinderVersion = tinderVersion || "13.23.0";
        this.storeVariant = storeVariant || "Play-Store";
        this.language = language || "en-US";
        this.platformVariant = platformVariant || "Google-Play";
        this.platform = platform || "android";
        this.appVersion = appVersion || "4427";
        this.osVersion = osVersion || 30;
        this.userAgent =
            userAgent || String("Tinder Android Version " + this.tinderVersion);
        this.appsFlyerId = appsFlyerId || generateAppsFlyerId();
        this.advertisingId = advertisingId || (0, uuid_1.v1)();
        this.funnelSessionId = funnelSessionId || (0, uuid_1.v1)();
        this.onboardingToken = onboardingToken || null;
        this.userId = userId || null;
        this.xAuthToken = xAuthToken || null;
        this.userSessionId = userSessionId || null;
        this.userSessionStartTime = userSessionStartTime || null;
        this.token = token || null;
    }
    static getField(response, name) {
        const entries = Object.entries(response);
        const found = entries.find(([key, value]) => key === name);
        if (found) {
            if (typeof found[1] === "object" && found[1].value)
                return found[1].value;
            if (typeof found[1] === "string")
                return found[1];
        }
        for (const entry of entries) {
            if (typeof entry[1] === "object") {
                const result = this.getField(entry[1], name);
                if (result)
                    return result;
            }
        }
        return null;
    }
    getAppSessionTimeElapsed() {
        return (Date.now() - this.appSessionStartTime) / 1000;
    }
    getUserSessionTimeElapsed() {
        return this.userSessionStartTime
            ? (Date.now() - this.userSessionStartTime) / 1000
            : null;
    }
    assignDecodedValues(response) {
        this.refreshToken =
            this.constructor.getField(response, "refreshToken") ||
                this.refreshToken;
        this.userId = this.constructor.getField(response, "userId") || this.userId;
        this.onboardingToken = this.constructor.getField(response, "onboardingToken") || this.onboardingToken;
        this.token = this.constructor.getField(response, "onboardingToken") || this.token;
        this.xAuthToken = this.constructor.getField(response, "authToken") || this.xAuthToken;
        if (typeof response?.loginResult !== "undefined" &&
            typeof response?.loginResult?.authTokenTtl !== "undefined") {
            this.userSessionStartTime = Date.now();
            this.userSessionId = (0, uuid_1.v1)();
        }
    }
    async _call(url, config = {}) {
        const contentLength = Buffer.from(config.body || "").length;
        let logData = {};
        logData["Proxy Options"] = this.proxyOptions;
        logData["Request Payload"] = true;
        if (url)
            logData["URL"] = url;
        if (this.token)
            logData["Token"] = this.token;
        if (this.appsFlyerId)
            logData["Appsflyer-id"] = this.appsFlyerId;
        if (this.advertisingId)
            logData["Advertising-id"] = this.advertisingId;
        if (this.funnelSessionId)
            logData["Funnel-session-id"] = this.funnelSessionId;
        if (this.userAgent)
            logData["User-agent"] = this.userAgent;
        if (this.osVersion)
            logData["Os-version"] = this.osVersion;
        if (this.appVersion)
            logData["App-version"] = this.appVersion;
        if (this.platform)
            logData["Platform"] = this.platform;
        if (this.platformVariant)
            logData["Platform-variant"] = this.platformVariant;
        if (this.language)
            logData["Accept-Language"] = this.language;
        logData["x-supported-image-formats"] = "webp";
        if (this.persistentDeviceId)
            logData["Persistent-device-id"] = this.persistentDeviceId;
        if (this.tinderVersion)
            logData["Tinder-version"] = this.tinderVersion;
        if (this.storeVariant)
            logData["Store-variant"] = this.storeVariant;
        if (this.installId)
            logData["Install-id"] = this.installId;
        if (this.appSessionId)
            logData["App-session-id"] = this.appSessionId;
        if (this.xAuthToken)
            logData["X-Auth-Token"] = this.xAuthToken;
        if (this.getAppSessionTimeElapsed())
            logData["App-session-time-elapsed"] = String(this.getAppSessionTimeElapsed().toFixed(3));
        if (this.userSessionId)
            logData["User-session-id"] = this.userSessionId;
        if (this.getUserSessionTimeElapsed())
            logData["User-session-time-elapsed"] = String(this.getUserSessionTimeElapsed()?.toFixed(3));
        if (contentLength)
            logData["Content Length"] = contentLength;
        logData["Content Type"] =
            (contentLength && (config.headers || {})["content-type"]) ||
                "application/x-protobuf";
        logData["Accept-Encoding"] = "gzip";
        try {
            return await (0, node_fetch_1.default)(url, {
                ...config,
                agent: this.proxyOptions && new socks_proxy_agent_1.SocksProxyAgent(this.proxyOptions),
                compress: true,
                method: config.method || "POST",
                headers: {
                    ...(config.headers || {}),
                    token: this.token,
                    "appsflyer-id": this.appsFlyerId,
                    "advertising-id": this.advertisingId,
                    "funnel-session-id": this.funnelSessionId,
                    "user-agent": this.userAgent,
                    "os-version": this.osVersion,
                    "app-version": this.appVersion,
                    platform: this.platform,
                    "platform-variant": this.platformVariant,
                    "x-supported-image-formats": "webp",
                    "accept-language": this.language,
                    "tinder-version": this.tinderVersion,
                    "store-variant": this.storeVariant,
                    "x-auth-token": this.xAuthToken,
                    "persistent-device-id": this.persistentDeviceId,
                    "app-session-id": this.appSessionId,
                    "user-session-id": this.userSessionId,
                    "user-session-time-elapsed": this.getUserSessionTimeElapsed()
                        ? String(this.getUserSessionTimeElapsed()?.toFixed(3))
                        : null,
                    "app-session-time-elapsed": String(this.getAppSessionTimeElapsed().toFixed(3)),
                    "install-id": this.installId,
                    "content-type": (contentLength && (config.headers || {})["content-type"]) ||
                        "application/x-protobuf",
                    "content-length": contentLength || undefined,
                    "accept-encoding": "gzip",
                },
            });
        }
        catch (e) {
            const trace = "An error occured while making a request to Tinder API";
            const error = {
                trace: trace,
                error: e,
                request: logData
            };
            throw new Error(JSON.stringify(error));
        }
    }
    async authLogin({ phoneNumber }) {
        this.appSessionStartTime = Date.now();
        const response = await this._call("https://api.gotinder.com/v3/auth/login", {
            method: "POST",
            body: proto_1.protocol.AuthGatewayRequest.encode({
                phone: {
                    phone: phoneNumber,
                },
            }).finish(),
        });
        const decoded = Buffer.from(await (await response.blob()).arrayBuffer());
        return proto_1.protocol.AuthGatewayResponse.decode(decoded);
    }
    async verifyOtp({ phoneNumber, otp }) {
        const response = await this._call("https://api.gotinder.com/v3/auth/login", {
            method: "POST",
            body: proto_1.protocol.AuthGatewayRequest.encode({
                phoneOtp: {
                    phone: {
                        value: phoneNumber,
                    },
                    otp,
                },
            }).finish(),
        });
        const decoded = proto_1.protocol.AuthGatewayResponse.decode(Buffer.from(await (await response.blob()).arrayBuffer()));
        this.assignDecodedValues(decoded);
        return decoded;
    }
    async getAuthToken() {
        const response = await this._call("https://api.gotinder.com/v3/auth/login", {
            method: "POST",
            body: proto_1.protocol.AuthGatewayRequest.encode({
                refreshAuth: {
                    refreshToken: this.refreshToken
                }
            }).finish(),
        });
        const decoded = proto_1.protocol.AuthGatewayResponse.decode(Buffer.from(await (await response.blob()).arrayBuffer()));
        this.assignDecodedValues(decoded);
        return decoded;
    }
    async checkIp() {
        const response = await (0, node_fetch_1.default)("https://api64.ipify.org?format=json", {
            agent: this.proxyOptions && new socks_proxy_agent_1.SocksProxyAgent(this.proxyOptions),
            method: "GET",
        });
        const { ip } = await response.json();
        return ip;
    }
    async verifyEmail({ otp }) {
        const response = await this._call("https://api.gotinder.com/v3/auth/login", {
            method: "POST",
            body: proto_1.protocol.AuthGatewayRequest.encode({
                emailOtp: {
                    otp,
                    refreshToken: {
                        value: this.refreshToken,
                    },
                },
            }).finish(),
        });
        const decoded = proto_1.protocol.AuthGatewayResponse.decode(Buffer.from(await (await response.blob()).arrayBuffer()));
        this.assignDecodedValues(decoded);
        return decoded;
    }
    async pushDevices() {
        const response = await this._call("https://api.gotinder.com/v3/push/devices", {
            method: "POST",
            body: {
                app_id: "com.tinder",
                push_notification_version: 2,
            },
        });
        return response.json();
    }
    async profileData() {
        const response = await this._call("https://api.gotinder.com/v2/profile?include=offerings%2Cfeature_access%2Caccount%2Cuser%2Cboost%2Ccampaigns%2Ccompliance%2Cemail_settings%2Cexperiences%2Cinstagram%2Clikes%2Cnotifications%2Conboarding%2Ctravel%2Cplus_control%2Cpurchase%2Creadreceipts%2Cspotify%2Csuper_likes%2Ctinder_u%2Ctop_photo%2Ctutorials%2Conboarding%2Cavailable_descriptors%2Cprofile_meter", {
            method: "GET",
        });
        return response.text();
    }
    async getMatches() {
        const response = await this._call("https://api.gotinder.com/v2/matches?count=100", {
            method: "GET",
        });
        return response.text();
    }
    async useEmail({ email }) {
        const response = await this._call("https://api.gotinder.com/v3/auth/login", {
            method: "POST",
            body: proto_1.protocol.AuthGatewayRequest.encode({
                email: {
                    email,
                    refreshToken: {
                        value: this.refreshToken,
                    },
                },
            }).finish(),
        });
        const decoded = proto_1.protocol.AuthGatewayResponse.decode(Buffer.from(await (await response.blob()).arrayBuffer()));
        this.assignDecodedValues(decoded);
        return decoded;
    }
    async startOnboarding() {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify({
                fields: [
                    {
                        data: {
                            body: "Please follow these House Rules.",
                            checked: true,
                            title: "Welcome to Tinder.",
                        },
                        name: "tinder_rules",
                    },
                ],
            }),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async setName({ name }) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify({ fields: [{ data: name, name: "name" }] }),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async setBirthDate({ birthDate }) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify({
                fields: [{ data: birthDate, name: "birth_date" }],
            }),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async setGender({ gender }) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify({
                fields: [
                    { data: Number(gender), name: "gender" },
                    { name: "custom_gender" },
                    { name: "show_gender_on_profile", data: false },
                ],
            }),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async setInterestedInGender({ gender }) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify({
                fields: [
                    { data: [Number(gender)], name: "interested_in_gender" },
                    {
                        name: "show_same_orientation_first",
                        data: { checked: false, should_show_option: false },
                    },
                ],
            }),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async setSchool({ schoolId, name, displayed }) {
        const payload = {
            fields: [
                {
                    data: [
                        { school_id: schoolId, name, displayed: displayed === "true" },
                    ],
                    name: "schools",
                },
            ],
        };
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async photo({ data }) {
        const filename = (0, uuid_1.v1)();
        const boundary = (0, uuid_1.v1)();
        const payload = Buffer.concat([Buffer.from('--' + boundary + '\r\n' + 'Content-Disposition: form-data; name="photo"; filename="' + filename + '"\r\nContent-Type: image/jpeg\r\nContent-Length: ' + String(data.length) + '\r\n\r\n'), data]);
        return (await this._call("https://api.gotinder.com/v2/onboarding/photo?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: payload,
            headers: {
                token: this.onboardingToken,
                "content-type": "multipart/form-data; boundary=" + boundary,
                "content-length": String(payload.length)
            },
        })).json();
    }
    async setInterests({ interests }) {
        const payload = {
            fields: [
                {
                    data: {
                        selected_interests: interests || [
                            { id: "it_33", name: "Cafe Hopping" },
                            { id: "it_2066", name: "Start ups" },
                            { id: "it_2322", name: "Mindfulness" },
                        ],
                    },
                    name: "user_interests",
                },
            ],
        };
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                token: this.onboardingToken,
                "content-type": "application/json; charset=UTF-8",
            },
        });
        return await response.json();
    }
    async healthCheckAuth() {
        return (await (0, node_fetch_1.default)("https://api.gotinder.com/healthcheck/auth", {
            method: "GET",
            agent: this.proxyOptions && new socks_proxy_agent_1.SocksProxyAgent(this.proxyOptions),
            headers: {
                "user-agent": this.userAgent,
                "os-version": this.osVersion,
                "app-version": this.appVersion,
                platform: this.platform,
                "platform-variant": this.platformVariant,
                "x-supported-image-formats": "webp",
                "accept-language": this.language,
                "tinder-version": this.tinderVersion,
                "store-variant": this.storeVariant,
                "persistent-device-id": this.persistentDeviceId,
                "app-session-id": this.appSessionId,
                "app-session-time-elapsed": String(this.getAppSessionTimeElapsed().toFixed(3)),
                "install-id": this.installId,
                "encoded-device-model": this.encodedDeviceModel,
                "encoded-device-carrier": this.encodedDeviceCarrier,
                "mobile-country-code": String(this.mobileCountryCode),
                "mobile-network-code": String(this.mobileNetworkCode),
                "accept-encoding": "gzip",
            },
        })).json();
    }
    static fromObject(o) {
        return new this(o);
    }
    toObject() {
        return {
            userId: this.userId,
            onboardingToken: this.onboardingToken,
            refreshToken: this.refreshToken,
            userAgent: this.userAgent,
            persistentDeviceId: this.persistentDeviceId,
            appSessionId: this.appSessionId,
            appSessionStartTime: this.appSessionStartTime,
            installId: this.installId,
            encodedDeviceModel: this.encodedDeviceModel,
            encodedDeviceCarrier: this.encodedDeviceCarrier,
            mobileCountryCode: this.mobileCountryCode,
            mobileNetworkCode: this.mobileNetworkCode,
            tinderVersion: this.tinderVersion,
            storeVariant: this.storeVariant,
            osVersion: this.osVersion,
            appVersion: this.appVersion,
            platform: this.platform,
            appsFlyerId: this.appsFlyerId,
            advertisingId: this.advertisingId,
            funnelSessionId: this.funnelSessionId,
            platformVariant: this.platformVariant,
            userSessionId: this.userSessionId,
            token: this.token,
            language: this.language,
            xAuthToken: this.xAuthToken,
            userSessionStartTime: this.userSessionStartTime,
        };
    }
    toJSON() {
        return JSON.stringify(this.toObject(), null, 2);
    }
    static fromJSON(s) {
        return this.fromObject(JSON.parse(s));
    }
    async purchasePaymentCard(o) {
        const response = await this._call("https://api.gotinder.com/purchase/payment/card", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseCcPidCancel(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc/{pid}/cancel", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseCcPidAutoRenew(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc/{pid}/auto-renew", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchasePaymentLatest(o) {
        const response = await this._call("https://api.gotinder.com/purchase/payment/latest", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseCcTaxZipCode(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc/tax/{zip_code}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseCc(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async purchaseCc3d(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc/3d", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseCcRestore(o) {
        const response = await this._call("https://api.gotinder.com/purchase/cc/restore", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiencesHighlights(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences/highlights", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileIncludeUserAvailableDescriptors(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile?include=user,available_descriptors", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileUserIncludeUser(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/user?include=user", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async userinterestsSearch(o) {
        const response = await this._call("https://api.gotinder.com/v2/userinterests/search", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async friendsRequestGenerate(o) {
        const response = await this._call("https://api.gotinder.com/v2/friends/request/generate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async friendsAll(o) {
        const response = await this._call("https://api.gotinder.com/v2/friends/all", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async insendioTemplatesActive(o) {
        const response = await this._call("https://api.gotinder.com/v2/insendio/templates/active", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async insendioCampaignsRawId(o) {
        const response = await this._call("https://api.gotinder.com/v2/insendio/campaigns/{rawId}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async insendioCampaigns(o) {
        const response = await this._call("https://api.gotinder.com/v2/insendio/campaigns", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async notifications(o) {
        const response = await this._call("https://api.gotinder.com/v2/notifications", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async notificationsNotificationTimestamp(o) {
        const response = await this._call("https://api.gotinder.com/v2/notifications/{notificationTimestamp}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async insendioCampaignsView(o) {
        const response = await this._call("https://api.gotinder.com/v2/insendio/campaigns/view", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async insendioCampaignsCampaignIdSubmit(o) {
        const response = await this._call("https://api.gotinder.com/v2/insendio/campaigns/{campaignId}/submit", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async notificationsRead(o) {
        const response = await this._call("https://api.gotinder.com/v2/notifications/read", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async soterRecsRoomId(o) {
        const response = await this._call("https://api.gotinder.com/v2/soter/recs/{room_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async dynamicuiConfigurationContent(o) {
        const response = await this._call("https://api.gotinder.com/dynamicui/configuration/content", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async authAccountRecovery(o) {
        const response = await this._call("https://api.gotinder.com/v3/auth/account_recovery", { method: "POST", body: proto_1.protocol.AuthGatewayRequest.encode(o).finish() });
        return response;
    }
    async authPhoneUpdate(o) {
        const response = await this._call("https://api.gotinder.com/v3/auth/phone_update", { method: "POST", body: proto_1.protocol.AuthGatewayRequest.encode(o).finish() });
        return response;
    }
    async verificationUnderageJpStatus(o) {
        const response = await this._call("https://api.gotinder.com/verification/underage/jp/status", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationUnderageGlobal(o) {
        const response = await this._call("https://api.gotinder.com/verification/underage/global", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async ageVerificationUrl(o) {
        const response = await this._call("https://api.gotinder.com/1.0/age-verification/url", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async publishAppBinary(o) {
        const response = await this._call("https://api.gotinder.com/v3/publish/app/binary", {
            method: "POST",
            body: proto_1.protocol.AppEventPublishRequest.encode(o).finish(),
        });
        return response;
    }
    async mediaservicePlaceholders(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/placeholders", {
            method: "POST",
            body: proto_1.protocol.CreatePlaceholderRequest.encode(o).finish(),
        });
        return proto_1.protocol.null.decode(await (await response.blob()).arrayBuffer());
    }
    async mediaserviceAvatar(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/avatar", {
            method: "POST",
            body: proto_1.protocol.UpdatePhotoAvatarRequest.encode(o).finish(),
        });
        return proto_1.protocol.null.decode(await (await response.blob()).arrayBuffer());
    }
    async mediaserviceDetails(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/details", {
            method: "POST",
            body: proto_1.protocol.UpdateMediaDetailsRequest.encode(o).finish(),
        });
        return proto_1.protocol.null.decode(await (await response.blob()).arrayBuffer());
    }
    async mediaserviceOrder(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/order", { method: "POST", body: proto_1.protocol.OrderMediaRequest.encode(o).finish() });
        return proto_1.protocol.null.decode(await (await response.blob()).arrayBuffer());
    }
    async mediaserviceLoop(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/loop", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async mediaservicePhoto(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/photo", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async mediaserviceVideo(o) {
        const response = await this._call("https://api.gotinder.com/mediaservice/video", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async mediaSubmit(o) {
        const response = await this._call("https://api.gotinder.com/v2/media/submit", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async suggestions(o) {
        const response = await this._call("https://api.gotinder.com/v2/suggestions", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async messageSuggestions(o) {
        const response = await this._call("https://api.gotinder.com/v2/message-suggestions", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async meta(o) {
        let payload;
        if (!Object.keys(o).length)
            payload = {
                force_fetch_resources: true,
                lat: 41.5074027,
                lon: -71.8992217
            };
        else {
            payload = {
                force_fetch_resources: o.forceFetchResources || true,
                lat: o.lat && Number(o.lat) || 41.5074027,
                lon: o.lon && Number(o.lon) || -71.8992217
            };
        }
        const response = await this._call("https://api.gotinder.com/v2/meta", {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        return await response;
    }
    async matchmakerRegistration(o) {
        const response = await this._call("https://api.gotinder.com/v2/matchmaker/registration", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileMutuals(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/mutuals", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileIncludeUser(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile?include=user", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async userconnectionsContacts(o) {
        const response = await this._call("https://api.gotinder.com/v3/userconnections/contacts", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async onboardingAutocomplete(o) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/autocomplete", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async onboardingComplete(o) {
        if (!Object.keys(o).length)
            o = {
                fields: [{ data: { max_age: o.maxAge || 41, min_age: o.minAge || 18 }, name: 'age_settings' }]
            };
        const response = await this._call("https://api.gotinder.com/v2/onboarding/complete", { method: "POST", body: JSON.stringify(o), headers: { token: this.onboardingToken, 'content-type': 'application/json; charset=UTF-8' } });
        return await response.json();
    }
    async onboardingUser(o) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/user", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async onboardingFields(o) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/fields", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async onboardingPhoto(o) {
        const response = await this._call("https://api.gotinder.com/v2/onboarding/photo", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async matchesPresence(o) {
        const response = await this._call("https://api.gotinder.com/matches/presence", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async locationSearch(o) {
        const response = await this._call("https://api.gotinder.com/location/search", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tokengatewayPushSend(o) {
        const response = await this._call("https://api.gotinder.com/v2/tokengateway/push/send", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceBlockRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/block/{room_id}", { method: "POST", body: proto_1.protocol.BlockUserRequest.encode(o).finish() });
        return proto_1.protocol.any.decode(await (await response.blob()).arrayBuffer());
    }
    async roomserviceRoom(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/room", { method: "POST", body: proto_1.protocol.CreateRoomRequest.encode(o).finish() });
        return response;
    }
    async roomserviceEndRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/end/{room_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceJoinRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/join/{room_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceLeaveRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/leave/{room_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceRooms(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/rooms", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceReportRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/report/{room_id}", { method: "POST", body: proto_1.protocol.ReportRoomRequest.encode(o).finish() });
        return proto_1.protocol.any.decode(await (await response.blob()).arrayBuffer());
    }
    async roomserviceStatusRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/status/{room_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async roomserviceRoomRoomId(o) {
        const response = await this._call("https://api.gotinder.com/roomservice/room/{room_id}", { method: "POST", body: proto_1.protocol.UpdateRoomRequest.encode(o).finish() });
        return proto_1.protocol.RoomServiceResponse.decode(await (await response.blob()).arrayBuffer());
    }
    async v4ReportTree(o) {
        const response = await this._call("https://api.gotinder.com/v4/report/tree", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async v4ReportNew(o) {
        const response = await this._call("https://api.gotinder.com/v4/report/new", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async initiateVideoMatchId(o) {
        const response = await this._call("https://api.gotinder.com/initiate_video/{match_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async videoCallStatusMatchId(o) {
        const response = await this._call("https://api.gotinder.com/video_call_status/{match_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async gamesConfiguration(o) {
        const response = await this._call("https://api.gotinder.com/v2/games/configuration", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async games(o) {
        const response = await this._call("https://api.gotinder.com/v2/games", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async gamesMove(o) {
        const response = await this._call("https://api.gotinder.com/v2/games/move", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async suggestionsDismissal(o) {
        const response = await this._call("https://api.gotinder.com/v2/suggestions/dismissal", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async surefireReferral(o) {
        const response = await this._call("https://api.gotinder.com/v2/surefire/referral", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async chatRooms(o) {
        const response = await this._call("https://api.gotinder.com/v2/chat-rooms", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async chatRoomsRegistration(o) {
        const response = await this._call("https://api.gotinder.com/v2/chat-rooms/registration", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async chatRoomsInteractions(o) {
        const response = await this._call("https://api.gotinder.com/v2/chat-rooms/interactions", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async vendorUserTokensGarboUrl(o) {
        const response = await this._call("https://api.gotinder.com/v2/vendor-user-tokens/garbo/url", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async safetyCenterIndexJson(o) {
        const response = await this._call("https://api.gotinder.com/safety-center/index.json", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async matchSettingsSelfieVerificationMatchId(o) {
        const response = await this._call("https://api.gotinder.com/match-settings/selfie-verification/{matchId}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationFacemapClientKeys(o) {
        const response = await this._call("https://api.gotinder.com/v2/verification/facemap/client-keys", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationFacemapSessionToken(o) {
        const response = await this._call("https://api.gotinder.com/v2/verification/facemap/session-token", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationSelfieStart(o) {
        const response = await this._call("https://api.gotinder.com/v2/verification/selfie/start", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationFacemapPhotoMatch(o) {
        const response = await this._call("https://api.gotinder.com/v2/verification/facemap/photo-match", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async accountRecoverySend(o) {
        const response = await this._call("https://api.gotinder.com/v2/account/recovery/send", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async authSmsSend(o) {
        const response = await this._call("https://api.gotinder.com/v2/auth/sms/send", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async accountRecoveryConfirm(o) {
        const response = await this._call("https://api.gotinder.com/v2/account/recovery/confirm", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async authSmsValidate(o) {
        const response = await this._call("https://api.gotinder.com/v2/auth/sms/validate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async androidTrackerId(o) {
        const response = await this._call("https://api.gotinder.com/{android_tracker_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async track(o) {
        const response = await this._call("https://api.gotinder.com/v1/track", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async dynamicuiTappycontent(o) {
        const response = await this._call("https://api.gotinder.com/dynamicui/tappycontent", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async imageFirst1(o) {
        const response = await this._call("https://api.gotinder.com/image?first=1", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async image(o) {
        const response = await this._call("https://api.gotinder.com/image", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async imageMain1(o) {
        const response = await this._call("https://api.gotinder.com/image?main=1", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async mediaVideo(o) {
        const response = await this._call("https://api.gotinder.com/media/video", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async userShareLinkId(o) {
        const response = await this._call("https://api.gotinder.com/v2/user/share/{linkId}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tinderuApply(o) {
        const response = await this._call("https://api.gotinder.com/v2/tinderu/apply", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tinderuApplyForm(o) {
        const response = await this._call("https://api.gotinder.com/v2/tinderu/apply/form", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async instagramAuthenticate(o) {
        const response = await this._call("https://api.gotinder.com/instagram/authenticate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseDiscountEligibility(o) {
        const response = await this._call("https://api.gotinder.com/v2/purchase/discount/eligibility", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileTutorials(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/tutorials", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileSpotifySync(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/spotify/sync", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async readreceiptMatchId(o) {
        const response = await this._call("https://api.gotinder.com/v2/readreceipt/{match_id}", { method: "POST", body: JSON.stringify(o) });
        return await response;
    }
    async exploreRecs(o) {
        const response = await this._call("https://api.gotinder.com/v2/explore/recs", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseDiscountSponsoredMessage(o) {
        const response = await this._call("https://api.gotinder.com/v2/purchase/discount/sponsored-message", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatchCount(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/count", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatch(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatchTeaser(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/teaser", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatchTeasers(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/teasers", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async instagramAuthorize(o) {
        const response = await this._call("https://api.gotinder.com/instagram/authorize", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatchNewcount(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/newcount", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async recsCore(o) {
        const response = await (0, node_fetch_1.default)("https://api.gotinder.com/v2/recs/core?locale=en&distance_setting=mi", {
            method: "GET",
            headers: {
                'support-short-video': String(1),
                'connection-speed': String(1112),
                'user-agent': this.userAgent,
                'os-version': this.osVersion,
                'app-version': this.appVersion,
                platform: this.platform,
                'platform-variant': this.platformVariant,
                'x-supported-image-formats': 'webp',
                'accept-language': this.language,
                'tinder-version': this.tinderVersion,
                'store-variant': this.storeVariant,
                'x-auth-token': this.xAuthToken,
                'persistent-device-id': this.persistentDeviceId,
                'app-session-id': this.appSessionId,
                'app-session-time-elapsed': String(this.getAppSessionTimeElapsed().toFixed(3)),
                'user-session-id': this.userSessionId,
                'user-session-time-elapsed': String(this.getUserSessionTimeElapsed()?.toFixed(3)),
                'install-id': this.installId,
                'accept-encoding': 'gzip'
            },
            agent: this.proxyOptions && new socks_proxy_agent_1.SocksProxyAgent(this.proxyOptions),
            compress: true
        });
        return await response.json();
    }
    async fastMatchSecretAdmirer(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/secret-admirer", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async mediaIds(o) {
        const response = await this._call("https://api.gotinder.com/media-ids", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async profileAutocomplete(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/autocomplete", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async campaignsCampaignId(o) {
        const response = await this._call("https://api.gotinder.com/v2/campaigns/{campaign_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async explore(o) {
        const response = await this._call("https://api.gotinder.com/v2/explore", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async subscriptionsTopic(o) {
        const response = await this._call("https://api.gotinder.com/v2/subscriptions/{topic}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async deviceCheckAndroid(o) {
        const response = await this._call("https://api.gotinder.com/v2/device-check/android", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiences(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async inboxMessages(o) {
        const response = await this._call("https://api.gotinder.com/v2/inbox/messages", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async instagramMedia(o) {
        const response = await this._call("https://api.gotinder.com/instagram/media", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async myLikes(o) {
        const response = await this._call("https://api.gotinder.com/v2/my-likes", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async matchesMatchId(o) {
        const response = await this._call("https://api.gotinder.com/v2/matches/{match_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async locationPopular(o) {
        const response = await this._call("https://api.gotinder.com/location/popular", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profile(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async crmapiPrompts(o) {
        const response = await this._call("https://api.gotinder.com/v2/crmapi/prompts", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async rosettaLocalization(o) {
        const response = await this._call("https://api.gotinder.com/v2/rosetta/localization", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiencesSeries(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences/series", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async userUserIdShare(o) {
        const response = await this._call("https://api.gotinder.com/user/{user_id}/share", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async metaSuperlikeInfo(o) {
        const response = await this._call("https://api.gotinder.com/meta/superlike/info", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async themesThemeId(o) {
        const response = await this._call("https://api.gotinder.com/v2/themes/{theme_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async themesBatch(o) {
        const response = await this._call("https://api.gotinder.com/v2/themes/batch", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async updates(o) {
        const response = await this._call("https://api.gotinder.com/updates", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async userUserId(o) {
        const response = await this._call("https://api.gotinder.com/user/{user_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async topPicksRate(o) {
        const response = await this._call("https://api.gotinder.com/v2/top-picks/rate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async liveCount(o) {
        const response = await this._call("https://api.gotinder.com/v2/live-count", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async surgeUser(o) {
        const response = await this._call("https://api.gotinder.com/v2/surge/user", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async userRecommendedemailLinkId(o) {
        const response = await this._call("https://api.gotinder.com/v2/user/recommendedemail/{linkId}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseOfferView(o) {
        const response = await this._call("https://api.gotinder.com/purchase/offer/view", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseDiscountView(o) {
        const response = await this._call("https://api.gotinder.com/v2/purchase/discount/view", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async matches(o) {
        const response = await this._call("https://api.gotinder.com/v2/matches", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async matchesMatchIdMessages(o) {
        const response = await this._call("https://api.gotinder.com/v2/matches/{match_id}/messages", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async passRecId(o) {
        const response = await (0, node_fetch_1.default)("https://api.gotinder.com/pass/" + o.id + '?' + querystring_1.default.stringify({ photoId: o.photoId, content_hash: o.content_hash, s_number: o.s_number }), {
            method: "GET", headers: {
                'user-agent': this.userAgent,
                'os-version': this.osVersion,
                'app-version': this.appVersion,
                platform: this.platform,
                'platform-variant': this.platformVariant,
                'x-supported-image-formats': 'webp',
                'accept-language': this.language,
                'tinder-version': this.tinderVersion,
                'store-variant': this.storeVariant,
                'x-auth-token': this.xAuthToken,
                'persistent-device-id': this.persistentDeviceId,
                'app-session-id': this.appSessionId,
                'user-session-id': this.userSessionId,
                'app-session-time-elapsed': String(this.getAppSessionTimeElapsed().toFixed(3)),
                'user-session-time-elapsed': String(this.getUserSessionTimeElapsed()?.toFixed(3)),
                'install-id': this.installId,
                'accept-encoding': 'gzip'
            }
        });
        return await response.json();
    }
    async likeRecId(o) {
        const response = await this._call(`https://api.gotinder.com/like/${o.id}`, { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async passportUserPrecheck(o) {
        const response = await this._call("https://api.gotinder.com/passport/user/precheck", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async campaignsEnable(o) {
        const response = await this._call("https://api.gotinder.com/v2/campaigns/enable", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiencesJourneys(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences/journeys", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiencesJourneysComplete(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences/journeys/complete", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async fastMatchSecretAdmirerRate(o) {
        const response = await this._call("https://api.gotinder.com/v2/fast-match/secret-admirer/rate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileUsername(o) {
        const response = await this._call("https://api.gotinder.com/profile/username", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseIac(o) {
        const response = await this._call("https://api.gotinder.com/v2/purchase/iac", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async campaignsEventsRegister(o) {
        const response = await this._call("https://api.gotinder.com/v2/campaigns/events/register", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async experiencesJourneysStart(o) {
        const response = await this._call("https://api.gotinder.com/v2/experiences/journeys/start", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileSpotifyResync(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/spotify/resync", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileExperiences(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/experiences", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profilePlusControl(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/plus_control", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async giphySearch(o) {
        const response = await this._call("https://api.gotinder.com/giphy/search", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async profileSpotifyPopular(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/spotify/popular", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileSpotifySearch(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/spotify/search", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tenorSearch(o) {
        const response = await this._call("https://api.gotinder.com/tenor/search", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async harassingmessagesMatchId(o) {
        const response = await this._call("https://api.gotinder.com/v2/harassingmessages/{matchId}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async userMatchesMatchId(o) {
        const response = await this._call("https://api.gotinder.com/user/matches/{match_id}", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseLogs(o) {
        const response = await this._call("https://api.gotinder.com/purchase/logs", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async media(o) {
        const response = await this._call("https://api.gotinder.com/media", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async likeRecIdSuper(o) {
        const response = await this._call("https://api.gotinder.com/like/{rec_id}/super", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async giphyTrending(o) {
        const response = await this._call("https://api.gotinder.com/giphy/trending", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tenorTrending(o) {
        const response = await this._call("https://api.gotinder.com/tenor/trending", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileConsentsMessage(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/consents/message", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileUser(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/user", { method: "POST", body: JSON.stringify(o) });
        return await response;
    }
    async profileSchool(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/school", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileTinderu(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/tinderu", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async promosValidate(o) {
        const response = await this._call("https://api.gotinder.com/v2/promos/validate", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async purchaseAndroid(o) {
        const response = await this._call("https://api.gotinder.com/purchase/android", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async tinderuVerify(o) {
        const response = await this._call("https://api.gotinder.com/v2/tinderu/verify", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async healthcheckAuth(o) {
        const response = await this._call("https://api.gotinder.com/healthcheck/auth", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async challengeVerify(o) {
        const response = await this._call("https://api.gotinder.com/challenge/verify", { method: "POST", body: JSON.stringify(o) });
        return await response;
    }
    async verificationUnderageState(o) {
        const response = await this._call("https://api.gotinder.com/verification/underage/state", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async verificationUnderageUrl(o) {
        const response = await this._call("https://api.gotinder.com/verification/underage/url", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async boostResult(o) {
        const response = await this._call("https://api.gotinder.com/boost/result", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async consumablesBouncerBypass(o) {
        const response = await this._call("https://api.gotinder.com/v2/consumables/bouncer-bypass", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async topPicksCategoryDiscovery(o) {
        const response = await this._call("https://api.gotinder.com/v2/top-picks-category/discovery", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async topPicksCategory(o) {
        const response = await this._call("https://api.gotinder.com/v2/top-picks-category", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async topPicksCategoryPreview(o) {
        const response = await this._call("https://api.gotinder.com/v2/top-picks-category/preview", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async profileConsents(o) {
        const response = await this._call("https://api.gotinder.com/v2/profile/consents", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async connectIncludeIcebreakersMatchPrompts(o) {
        const response = await this._call("https://api.gotinder.com/connect?include=icebreakers,match_prompts", { method: "POST", body: JSON.stringify(o) });
        return await response.json();
    }
    async contacts(o) {
        const response = await this._call("https://api.gotinder.com/v1/contacts", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async buckets(o) {
        const response = await this._call("https://api.gotinder.com/v2/buckets", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
    async boost(o) {
        const response = await this._call("https://api.gotinder.com/boost", {
            method: "POST",
            body: JSON.stringify(o),
        });
        return await response.json();
    }
}
exports.TinderClient = TinderClient;
//# sourceMappingURL=tinder.js.map