import { v1 } from "uuid";
import fingerprints from "android-fingerprints";
import crypto from "crypto";
import FormData from "form-data";
import fs from "fs";
import qs from "querystring";
import { SocksProxyAgent } from "socks-proxy-agent";

type SaveSelectedProfileDescriptorRequestBody = any;
type School = any;
type SaveChoiceSelectionsRequestBody = any;
type SexualOrientation = any;
type MessageConsentResponseMessageConsent = any;
type MessageConsentCode = any;
type DealBreakerSettings = any;
type ShowSameOrientationFirst = any;
type MediaId = any;
type PurchaseLog = any;
type TenorApiResponseMediaCollection = any;
type TenorApiResponseTenorGif = any;
type RawJson = string;
type ApiMatch = any;
type User = any;
type ThemeResponse = any;
type Prompt = any;
type Photo = any;
type ProcessingVideo = any;
type Asset = any;
type Pose = any;
type ApiFormatting = any;
type GameMove = any;
type AutoCompleteSuggestion = any;
type AnswerBodyAnswerId = any;
type ProfileShareFriendsListResponseFriend = any;
type SaveHeightRequestSelectedDescriptor = any;

interface IAddNewCardRequest {
  card_encrypted_json?: string;
  email?: string;
  brazil_cpf?: string;
}
interface IPostAuthorizationPurchaseRequest {
  id?: string;
  paResponse?: string;
  md?: string;
}
interface ICreditCardPurchaseResponse {
  email?: string;
  product_id?: string;
  product_type?: string;
  terms?: string;
  status?: string;
  platform?: string;
  id?: string;
  restore_token?: string;
  is_auto_renewing?: string;
  tinder_purchase_id?: string;
  md?: string;
  issuer_url?: string;
  pa_request?: string;
  identify?: string;
}
interface IDeleteCreditCardResponse {}
interface ICurrentCardInfoResponse {
  card?: string;
  variant?: string;
  billingInfo?: string;
}
interface IPricingRequest {
  product_id?: string;
  price?: string;
  currency?: string;
}
interface IPricingResponse {
  meta?: string;
  data?: string;
  error?: string;
}
interface ICreditCardPurchaseRequest {
  purchase_request_id?: string;
  email?: string;
  zip?: string;
  product_id?: string;
  card_encrypted_json?: string;
  price?: string;
  currency?: string;
  previous_purchase_id?: string;
  cardholder_name?: string;
  card_type?: string;
  save_card?: string;
  brazil_cpf?: string;
}
interface IThreeDSAuthApiRequestChallengeShopperRequest {
  transStatus?: string;
  type?: string;
  id?: string;
}
interface IThreeDSAuthApiResponse {
  challenge?: string;
  email?: string;
  product_id?: string;
  product_type?: string;
  create_date?: string;
  status?: string;
  platform?: string;
  id?: string;
}
interface IThreeDSAuthApiRequestIdentifyShopperRequest {
  type?: string;
  id?: string;
  sdkAppID?: string;
  sdkEncData?: string;
  sdkEphemPubKey?: string;
  sdkReferenceNumber?: string;
  sdkTransID?: string;
}
interface IRestorePurchaseResponse {
  expire_date?: string;
  status?: string;
  email?: string;
  product_id?: string;
  create_date?: string;
  is_auto_renewing?: string;
  id?: string;
  terms?: string;
  restore_token?: string;
  platform?: string;
  product_type?: string;
}
interface IHighlightsResponse {
  data?: string;
}
interface IHeightDescriptorResponse {
  meta?: string;
  data?: string;
}
interface ISaveHeightRequest {
  selected_descriptors_append?: SaveHeightRequestSelectedDescriptor[];
}
interface ISaveHeightRequestSelectedDescriptor {
  id?: string;
  measurable_selection?: string;
}
interface IUserInterestsSearchResponse {
  user_interests?: string;
}
interface IProfileShareFriendRequestResponse {
  link?: string;
}
interface IProfileShareFriendsListResponse {
  friends?: ProfileShareFriendsListResponseFriend[];
}
interface IProfileShareFriendsListResponseFriend {
  _id?: string;
  name?: string;
  thumbnail?: string;
}
interface IDataResponse {}
interface ISingleCampaignResponse {
  data?: string;
}
interface ICampaignsResponse {
  data?: string;
}
interface INotificationReadStatusResponse {
  data?: string;
}
interface INotificationListResponse {
  data?: string;
}
interface IOpenedNotificationBody {}
interface ICampaignViewedBody {
  campaignId?: string;
  type?: string;
}
interface IAnswerBody {
  responses?: AnswerBodyAnswerId[];
}
interface IAnswerBodyAnswerId {
  id?: string;
}
interface IUpdateNotificationReadStatusBody {
  read_timestamp?: string;
}
interface INonceResponse {
  nonce?: string;
}
interface IDionysusRecsResponse {
  data?: string;
}
interface IAgeVerificationRequest {
  funnel_session_id?: string;
}
interface IAgeVerificationResponse {
  url?: string;
  expiration_ts?: string;
}
interface IMultipartBodyPart {}
interface ISubmittedMediaUploadResponse {
  hash?: string;
}
interface IApiMessageSuggestionsResponse {
  data?: string;
}
interface IMetaRequestBody {
  lat?: number;
  lon?: number;
  forceFetchResources?: boolean;
}
interface IMetaDataResponse {
  data?: string;
}
interface IMMRegistrationRequest {}
interface IMMSessionRegistrationResponse {
  invitation_id?: string;
  is_new_matchmaking_session?: string;
  expires_at?: string;
}
interface ITerminateActiveMMSessionsResponse {
  expires_at?: string;
}
interface IMutualsProfileResponse {
  data?: string;
}
interface IMutualsSettingsResponse {
  data?: string;
}
interface IMutualsFeatureStateResponse {}
interface IContactUploadResponse {}
interface IAutoCompleteResponse {
  results?: AutoCompleteSuggestion[];
}
interface IAutoCompleteSuggestion {
  id?: string;
  name?: string;
  country?: string;
  formatting?: ApiFormatting[];
}
interface ICompleteUserRequest {}
interface IFieldsResponse {}
interface IUpdateFieldsRequestField {
  name: string;
  data: IUpdateFieldsRequestFieldData;
}

interface IUpdateFieldsRequestFieldData {
  body: string;
  checked: boolean;
  title: string;
}
interface IUpdateFieldsRequest {
  fields: IUpdateFieldsRequestField[];
}
interface IMatchesPresenceResponse {
  data?: string;
}
interface ILocationResponse {}
interface IGetUserReportingTreeResponseMapValue {}
interface IVideoChatConsentResponse {
  data?: string;
}
interface IStartVideoChatRequest {
  vendor?: string;
}
interface IStartVideoChatResponse {
  data?: string;
}
interface IUpdateVideoChatConsentRequest {
  status?: string;
}
interface ICampaignResponseData {
  data?: string;
}
interface IApiCatalogResponse {
  data?: string;
}
interface ICampaignPatchRequestBody {
  event_id?: string;
  enabled?: string;
  campaign_id?: string;
}
interface IGamesResponse {
  game_type?: string;
  context_id?: string;
  game_id?: string;
  emoji_match?: string;
  previous_emoji_match?: string;
}
interface IGetGamesConfigurationResponse {
  game_type?: string;
  emoji_match?: string;
}
interface IPostGamesRequest {
  context_type?: string;
  context_id?: string;
  game_type?: string;
  game_moves?: GameMove[];
}
interface IGameMove {
  timestamp_ms?: string;
  move_type?: string;
  made_by_player_id?: string;
  text_guess?: string;
  emoji_clue_submission?: string;
  end_round?: string;
}
interface IPostGamesMoveRequest {
  game_id?: string;
  game_move?: string;
}
interface IPutSuggestionsDismissalRequest {
  context_type?: string;
  context_id?: string;
  suggestion_type?: string;
}
interface IReferralRequest {
  rewards_program?: string;
}
interface IReferralResponse {
  data?: string;
}
interface IGetChatRoomResponse {
  data?: string;
}
interface IGetChatRoomInteractionsResponse {
  data?: string;
}
interface IChatRoomRegistrationRequest {
  chat_type?: string;
  context_id?: string;
  context_type?: string;
  should_expand_search_preferences?: string;
  registration_attempts?: string;
}
interface IChatRoomRegistrationResponse {
  data?: string;
}
interface IPostChatRoomInteractionRequest {
  interaction?: string;
}
interface IGarboUrlResponse {
  token_url?: string;
}
interface IGetSafetyCenterContentResponse {
  guide?: string;
  tools?: string;
  resources?: string;
}
interface IRequestVerificationResponse {
  request_verification_enabled?: string;
  selfie_verification_attempted?: string;
}
interface IFacetecKeyChainResponse {
  device_key?: string;
  facescan_public_encryption_key?: string;
  ios_android_production_key?: string;
}
interface IFacetecSessionTokenResponse {
  session_token?: string;
}
interface IStartSelfieVerificationResponse {
  poses?: Pose[];
}
interface IPose {
  id?: string;
  url?: string;
}
interface IFaceScanResponse {
  passed_liveness?: string;
  session_token_status?: string;
  scan_results_blob?: string;
}
interface IRequestAccountRecoveryLinkBody {
  email?: string;
}
interface IRequestAccountRecoveryLinkResponse {
  data?: string;
}
interface IRequestOneTimePasswordBody {
  phone_number?: string;
}
interface IRequestOneTimePasswordResponse {
  data?: string;
}
interface IVerifyAccountRecoveryLinkBody {
  otp_code?: string;
}
interface IVerifyAccountRecoveryLinkResponse {
  data?: string;
}
interface IVerifyOneTimePasswordBody {
  phone_number?: string;
  otp_code?: string;
  is_update?: string;
}
interface IVerifyOneTimePasswordResponse {
  data?: string;
}
interface IImageUploadResponse {
  assets?: Photo[];
  client_photo_id?: string;
}
interface IPhoto {}
interface IVideoUploadResponse {
  assets?: Photo[];
  videos_processing?: ProcessingVideo[];
}
interface IProcessingVideo {
  first?: string;
  main?: string;
}
interface IAcceptFriendMatchInviteResponse {
  matchId?: string;
}
interface IAddThirdPartyPhotoBody {
  transmit?: string;
  assets?: Asset[];
}
interface IAsset {}
interface IAddThirdPartyPhotoResponse {
  assets?: Photo[];
}
interface ITinderUResponse {}
interface ITinderUSheerIdRequest {}
interface ITinderUSheerIdResponse {}
interface IInstagramAuthRequestBody {
  code?: string;
}
interface IInstagramAuthResponse {
  instagram?: string;
}
interface IConnectSpotifyRequest {
  redirect_uri?: string;
  auth_code?: string;
}
interface IDeleteSuperLikeResponse {
  super_likes?: string;
}
interface ICuratedRecsResponse {}
interface IFastMatchCountResponse {
  data?: string;
  meta?: string;
}
interface IFastMatchFilteredRecsRequestBody {
  filter?: string;
  page_token?: string;
}
interface IFastMatchRecsResponse {}
interface IFastMatchPreviewResponse {}
interface IInstagramAuthUrlResponse {
  ig_auth_url?: string;
}
interface IFastMatchNewCountResponse {
  new_count_token?: string;
}
interface IRecsResponse {}
interface ISecretAdmirerResponse {}
interface IMediaIdsBody {
  num_pending_media?: string;
}
interface IMediaIdsResponse {
  media_ids?: string[];
}
interface ICampaignResponse {}
interface ICrmSubscriptionResponse {}
interface IDeviceCheckResponse {
  nonce?: string;
  nonce_version?: string;
  action?: string;
}
interface IInstagramMediaResponse {}
interface ILikedUsersRecsResponse {
  page_token?: string;
}
interface IProfileV2Response {}
interface IPromptsResponse {
  prompts?: Prompt[];
}
interface IPrompt {}
interface IApiSeriesResponse {
  series?: string;
}
interface IShareLinkRequestBody {
  isShareV2?: string;
}
interface IShareLinkResponse {
  link?: string;
  share_text_v2?: string;
}
interface ISuperlikeStatusInfoResponse {}
interface IThemeResponse {
  theme_id?: string;
  name?: string;
  matches?: string;
  profile?: string;
  open_profile?: string;
  session?: string;
  recs?: string;
  experiences?: string;
  gold_home?: string;
  chat_room?: string;
  curated_cardstack?: string;
  explore?: string;
}
interface IThemeBatchResponse {
  themes?: ThemeResponse[];
}
interface IUpdatesRequestBody {
  nudge?: string;
  last_activity_date?: string;
}
interface IUserResponse {}
interface ILikeRatingRequest {}
interface ILikeRatingResponse {}
interface ITopPicksLikeRatingRequest {
  type?: string;
  top_picks?: string;
  id?: string;
  photoId?: string;
  content_hash?: string;
  super?: string;
  user_traveling?: string;
  rec_traveling?: string;
  is_boosting?: string;
  fast_match?: string;
  undo?: string;
  s_number?: string;
  category?: string;
}
interface ITopPicksLikeRatingResponse {
  response?: string;
  exhausted?: string;
  free_likes_remaining?: string;
  uid?: string;
}
interface ILiveCountsResponse {
  count_history?: number[];
  time_unit?: number;
}
interface ISharedUserResponse {
  isShareV2?: string;
  referrer?: string;
  user?: string;
}
interface ISwipeSurgeResponse {
  start_date?: string;
  end_date?: string;
  expiration_date?: string;
  campaign_id?: string;
  multiplier?: string;
  location?: string;
}
interface IUsersRecommendedByEmailResponse {
  users?: User[];
}
interface IUser {}
interface IPurchaseDiscountViewedRequestById {
  discountId?: string;
}
interface IPurchaseDiscountViewedResponse {
  viewed_at?: string;
  expires_at?: string;
}
interface IPurchaseDiscountViewedRequestByTypeAndCampaign {
  product_type?: string;
  campaign?: string;
}
interface IMatchListResponse {
  matches?: ApiMatch[];
  next_page_token?: string;
}
interface IApiMatch {}
interface IMessageListResponse {
  messages?: RawJson[];
  next_page_token?: string;
}
interface IRawJson {}
interface IPassRatingResponse {}
interface IApiJourneyBody {
  story_id?: string;
  journey_id?: string;
  path?: string[];
}
interface IApiUpdateJourneyResponse {
  post_experience_context?: string;
}
interface IApiCompleteJourneyResponse {
  episode?: string;
  post_experience_context?: string;
  post_experience_theme?: string;
}
interface ISecretAdmirerRateRequest {
  uid?: string;
  type?: string;
}
interface ISecretAdmirerRateApiResponse {}
interface IUpdateUsernameRequestBody {
  username?: string;
}
interface IInAppCurrencyPurchaseRequestBody {
  productId?: string;
  purchaseRequestId?: string;
  currency?: string;
  price?: string;
}
interface ICampaignEventRegistrationRequest {
  event_id?: string;
}
interface IApiStartJourneyBody {
  story_id?: string;
}
interface IApiStartJourneyDataResponse {
  meta?: string;
  data?: string;
  error?: string;
}
interface IExperiencesUpdateRequestBody {
  show_experiences?: string;
}
interface IExperienceUpdateResponse {
  experiences?: string;
}
interface IGiphyApiResponse {}
interface IPopularSpotifyTrackResponse {
  popular_on_spotify_playlist?: string;
}
interface ISearchSpotifyResponse {
  tracks?: string;
}
interface ITenorApiResponse {
  results?: TenorApiResponseTenorGif[];
}
interface ITenorApiResponseTenorGif {
  id?: string;
  media?: TenorApiResponseMediaCollection[];
}
interface ISendHarassingMessageDecisionRequestBody {
  message_id?: string;
  is_harassing?: string;
}
interface ISendMessageRequestBody {
  gif_id?: string;
  media_source?: string;
  media_url?: string;
  media_width?: string;
  media_height?: string;
  profile?: string;
  query?: string;
  response_id?: string;
  message_suggestion_id?: string;
  content_type?: string;
  content_id?: string;
  connect_context?: string;
}
interface IPurchaseLogRequest {
  errors?: PurchaseLog[];
}
interface IPurchaseLog {
  err_domain?: string;
  err_namespace?: string;
  err_class?: string;
  platform?: string;
  user_id?: string;
  app_version?: string;
  occurred_at?: string;
  meta?: string;
}
interface IPurchaseLogResponse {
  ProcessedItems?: string;
  UnprocessedIndices?: number[];
}
interface IOrderProfilePhotosBody {
  change_order?: MediaId[];
}
interface IMediaId {}
interface ITopPicksSuperlikeRatingRequest {
  type?: string;
  top_picks?: string;
  id?: string;
  photoId?: string;
  user_traveling?: string;
  rec_traveling?: string;
  is_boosting?: string;
  fast_match?: string;
  s_number?: string;
  category?: string;
}
interface ITopPicksSuperLikeRatingResponse {
  response?: string;
  exhausted?: string;
  free_likes_remaining?: string;
  uid?: string;
}
interface ISuperLikeContentBody {
  liked_content_id?: string;
  liked_content_type?: string;
  reaction_id?: string;
  swipe_note?: string;
  room_id?: string;
  explore_catalog_id?: string;
}
interface ISuperLikeRatingResponse {}
interface IUpdateCardStackPreferenceRequestBody {
  preference_filters?: string;
}
interface IDiscoverySettingsRequestBody {
  age_filter_min?: number;
  age_filter_max?: number;
  discoverable?: boolean;
  distance_filter?: number;
  show_same_orientation_first?: ShowSameOrientationFirst;
  interested_in?: number[];
  auto_expansion?: DealBreakerSettings;
}
interface IShowSameOrientationFirst {
  should_show_option?: string;
}
interface IDealBreakerSettings {
  age_toggle?: string;
  distance_toggle?: string;
}
interface IFirstMoveUpdateRequestBody {
  first_move?: string;
}
interface IGlobalModeSettingsRequestBody {
  global_mode?: string;
}
interface IUpdateMMSettingsRequestBody {
  mm_enabled?: string;
}
interface IMessageConsentRequestBody {
  consents?: MessageConsentCode[];
}
interface IMessageConsentCode {
  code?: string;
}
interface IMessageConsentResponse {
  consents?: MessageConsentResponseMessageConsent[];
}
interface IMessageConsentResponseMessageConsent {
  code?: string;
  category_code?: string;
  title?: string;
  enabled?: string;
}
interface IMessageControlsSettingsRequestBody {
  request_verification_enabled?: string;
}
interface IMessageControlsSettingsResponse {
  request_verification_enabled?: string;
}
interface IOnlinePresenceSettingsUpdateRequestBody {
  user_presence_disabled?: string;
}
interface IUpdatePhotoOptimizerEnabledRequestBody {
  photo_optimizer_enabled?: string;
}
interface IPicksDiscoverabilityUpdateRequestBody {
  top_picks_discoverable?: string;
}
interface IProfileUserUpdateRequestBody {
  bio?: string;
  gender?: number;
  custom_gender?: string;
  show_gender_on_profile?: boolean;
  birth_date?: number;
  sexual_orientations?: SexualOrientation[];
  show_orientation_on_profile?: boolean;
}
interface ISexualOrientation {}
interface IUpdateSchoolRequestBody {
  schools?: School[];
}
interface ISchool {}
interface IUpdateSchoolResponse {}
interface ISyncSwipeSettingsRequestBody {
  sync_swipe_enabled?: string;
}
interface ITinderUProfileRequestBody {}
interface IUserInterestsRequestBody {
  user_interests?: string;
}
interface IUpdateProfileDescriptorRequestBody {
  selected_descriptors_append?: SaveSelectedProfileDescriptorRequestBody[];
}
interface ISaveSelectedProfileDescriptorRequestBody {
  id?: string;
  choice_selections?: SaveChoiceSelectionsRequestBody[];
}
interface IPurchasePromotionsValidateRequest {
  identifier?: string;
}
interface IPurchasePromotionsValidateResponse {}
interface IVerifyRequest {
  token?: string;
}
interface IHealthcheckResponse {
  ok?: string;
}
interface IChallengeAnswerVerificationRequest {
  challenge_token?: string;
  challenge_answer?: string;
  challenge_type?: string;
}
interface IVerificationUrlResponse {
  url?: string;
}
interface IBoostRequest {
  amount?: string;
}
interface IBoostResponse {}
interface IBouncerBypassDataResponse {
  meta?: string;
  data?: string;
  error?: string;
}
interface ICategoryDiscoveryApiResponse {
  categories?: string[];
}
interface ICategoryApiResponse {
  top_picks_refresh_time?: string;
  top_picks_pending?: string;
  shared_passions?: string;
  recently_active?: string;
  featured?: string;
}
interface IConsentRequest {}
interface IConsentResponse {}
interface IConnectDataResponse {
  meta?: string;
  data?: string;
}
interface IBucketsRequestBody {
  device_id?: string;
  experiments?: string[];
}
interface IBucketsResponse {
  data?: string;
}
import { protocol } from "./proto";
import fetch from "node-fetch";

const randomDevice = () => {
  return fingerprints[Math.floor(Math.random() * fingerprints.length)];
};

const generateAppsFlyerId = () => {
  return (
    Math.floor(Math.random() * 1e13)
      .toString(10)
      .substr(0, 13) +
    "-" +
    (
      Math.floor(Math.random() * 1e16).toString(10) +
      Math.floor(Math.random() * 1e3).toString(10)
    ).substr(0, 19)
  );
};

export class TinderClient {
  public proxyOptions: any;
  public persistentDeviceId: string;
  public appSessionId: string;
  public appSessionStartTime: number;
  public installId: string;
  public appsFlyerId: string;
  public advertisingId: string;
  public funnelSessionId: string;
  public encodedDeviceModel: string;
  public encodedDeviceCarrier: string;
  public mobileCountryCode: number;
  public mobileNetworkCode: number;
  public tinderVersion: string;
  public storeVariant: string;
  public language: string;
  public platformVariant: string;
  public platform: string;
  public appVersion: string;
  public osVersion: string;
  public userAgent: string;
  public refreshToken: string;
  public userId: string;
  public onboardingToken: string;
  public xAuthToken: string;
  public userSessionStartTime: number;
  public token: string;
  public userSessionId: string;
  constructor({
    userAgent,
    proxyOptions,
    persistentDeviceId,
    appSessionId,
    appSessionStartTime,
    installId,
    encodedDeviceModel,
    encodedDeviceCarrier,
    mobileCountryCode,
    mobileNetworkCode,
    tinderVersion,
    storeVariant,
    osVersion,
    appVersion,
    platform,
    platformVariant,
    language,
    token,
    funnelSessionId,
    appsFlyerId,
    advertisingId,
    refreshToken,
    userId,
    onboardingToken,
    xAuthToken,
    userSessionId,
    userSessionStartTime,
  }: any = {}) {
    this.proxyOptions = proxyOptions || null;
    this.refreshToken = refreshToken || null;
    this.persistentDeviceId =
      persistentDeviceId || crypto.randomBytes(8).toString("hex");
    this.appSessionId = appSessionId || v1();
    this.appSessionStartTime = appSessionStartTime || null;
    this.installId = installId || crypto.randomBytes(8).toString("base64");
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
    this.advertisingId = advertisingId || v1();
    this.funnelSessionId = funnelSessionId || v1();
    this.onboardingToken = onboardingToken || null;
    this.userId = userId || null;
    this.xAuthToken = xAuthToken || null;
    this.userSessionId = userSessionId || null;
    this.userSessionStartTime = userSessionStartTime || null;
    this.token = token || null;
  }
  static getField(response: any, name: string) {
    const entries = Object.entries(response);
    const found: any = entries.find(([key, value]) => key === name);
    if (found) {
      if (typeof found[1] === "object" && found[1].value) return found[1].value;
      if (typeof found[1] === "string") return found[1];
    }
    for (const entry of entries) {
      if (typeof entry[1] === "object") {
        const result = this.getField(entry[1], name);
        if (result) return result;
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

  assignDecodedValues(response: any) {
    this.refreshToken =
      (this.constructor as any).getField(response, "refreshToken") ||
      this.refreshToken;
    this.userId =
      (this.constructor as any).getField(response, "userId") || this.userId;
    this.onboardingToken =
      (this.constructor as any).getField(response, "onboardingToken") ||
      this.onboardingToken;
    this.token =
      (this.constructor as any).getField(response, "onboardingToken") ||
      this.token;
    this.xAuthToken =
      (this.constructor as any).getField(response, "authToken") ||
      this.xAuthToken;
    if (
      typeof response?.loginResult !== "undefined" &&
      typeof response?.loginResult?.authTokenTtl !== "undefined"
    ) {
      this.userSessionStartTime = Date.now();
      this.userSessionId = v1();
    }
  }

  async _call(url, config: any = {}) {
    const contentLength = Buffer.from(config.body || "").length;
    let logData = {};
    logData["Proxy Options"] = this.proxyOptions;
    logData["Request Payload"] = true;
    if (url) logData["URL"] = url;
    if (this.token) logData["Token"] = this.token;
    if (this.appsFlyerId) logData["Appsflyer-id"] = this.appsFlyerId;
    if (this.advertisingId) logData["Advertising-id"] = this.advertisingId;
    if (this.funnelSessionId)
      logData["Funnel-session-id"] = this.funnelSessionId;
    if (this.userAgent) logData["User-agent"] = this.userAgent;
    if (this.osVersion) logData["Os-version"] = this.osVersion;
    if (this.appVersion) logData["App-version"] = this.appVersion;
    if (this.platform) logData["Platform"] = this.platform;
    if (this.platformVariant)
      logData["Platform-variant"] = this.platformVariant;
    if (this.language) logData["Accept-Language"] = this.language;
    logData["x-supported-image-formats"] = "webp";
    if (this.persistentDeviceId)
      logData["Persistent-device-id"] = this.persistentDeviceId;
    if (this.tinderVersion) logData["Tinder-version"] = this.tinderVersion;
    if (this.storeVariant) logData["Store-variant"] = this.storeVariant;
    if (this.installId) logData["Install-id"] = this.installId;
    if (this.appSessionId) logData["App-session-id"] = this.appSessionId;
    if (this.xAuthToken) logData["X-Auth-Token"] = this.xAuthToken;
    if (this.getAppSessionTimeElapsed())
      logData["App-session-time-elapsed"] = String(
        this.getAppSessionTimeElapsed().toFixed(3),
      );
    if (this.userSessionId) logData["User-session-id"] = this.userSessionId;
    if (this.getUserSessionTimeElapsed())
      logData["User-session-time-elapsed"] = String(
        this.getUserSessionTimeElapsed()?.toFixed(3),
      );
    if (contentLength) logData["Content Length"] = contentLength;
    logData["Content Type"] =
      (contentLength && (config.headers || {})["content-type"]) ||
      "application/x-protobuf";
    logData["Accept-Encoding"] = "gzip";

    try {
      return await fetch(url, {
        ...config,
        agent: this.proxyOptions && new SocksProxyAgent(this.proxyOptions),
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
          "app-session-time-elapsed": String(
            this.getAppSessionTimeElapsed().toFixed(3),
          ),
          "install-id": this.installId,
          "content-type":
            (contentLength && (config.headers || {})["content-type"]) ||
            "application/x-protobuf",
          "content-length": contentLength || undefined,
          "accept-encoding": "gzip",
        },
      });
    } catch (e) {
      const trace = "An error occured while making a request to Tinder API";
      const error = {
        trace: trace,
        error: e,
        request: logData,
      };
      throw new Error(JSON.stringify(error));
    }
  }

  async authLogin({ phoneNumber }) {
    this.appSessionStartTime = Date.now();
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/login",
      {
        method: "POST",
        body: protocol.AuthGatewayRequest.encode({
          phone: {
            phone: phoneNumber,
          },
        }).finish(),
      },
    );
    const decoded = Buffer.from(await (await response.blob()).arrayBuffer());
    return protocol.AuthGatewayResponse.decode(decoded);
  }
  async verifyOtp({ phoneNumber, otp }) {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/login",
      {
        method: "POST",
        body: protocol.AuthGatewayRequest.encode({
          phoneOtp: {
            phone: {
              value: phoneNumber,
            },
            otp,
          },
        }).finish(),
      },
    );
    const decoded = protocol.AuthGatewayResponse.decode(
      Buffer.from(await (await response.blob()).arrayBuffer()),
    );
    this.assignDecodedValues(decoded);
    return decoded;
  }
  async getAuthToken() {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/login",
      {
        method: "POST",
        body: protocol.AuthGatewayRequest.encode({
          refreshAuth: {
            refreshToken: this.refreshToken,
          },
        }).finish(),
      },
    );
    const decoded = protocol.AuthGatewayResponse.decode(
      Buffer.from(await (await response.blob()).arrayBuffer()),
    );
    this.assignDecodedValues(decoded);
    return decoded;
  }

  async checkIp() {
    const response: any = await fetch("https://api64.ipify.org?format=json", {
      agent: this.proxyOptions && new SocksProxyAgent(this.proxyOptions),
      method: "GET",
    });
    const { ip } = await response.json();
    return ip;
  }
  async verifyEmail({ otp }) {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/login",
      {
        method: "POST",
        body: protocol.AuthGatewayRequest.encode({
          emailOtp: {
            otp,
            refreshToken: {
              value: this.refreshToken,
            },
          },
        }).finish(),
      },
    );
    const decoded = protocol.AuthGatewayResponse.decode(
      Buffer.from(await (await response.blob()).arrayBuffer()),
    );
    this.assignDecodedValues(decoded);
    return decoded;
  }

  async pushDevices() {
    const response = await this._call(
      "https://api.gotinder.com/v3/push/devices",
      {
        method: "POST",
        body: {
          app_id: "com.tinder",
          push_notification_version: 2,
        },
      },
    );
    return response.json();
  }

  async profileData() {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile?include=offerings%2Cfeature_access%2Caccount%2Cuser%2Cboost%2Ccampaigns%2Ccompliance%2Cemail_settings%2Cexperiences%2Cinstagram%2Clikes%2Cnotifications%2Conboarding%2Ctravel%2Cplus_control%2Cpurchase%2Creadreceipts%2Cspotify%2Csuper_likes%2Ctinder_u%2Ctop_photo%2Ctutorials%2Conboarding%2Cavailable_descriptors%2Cprofile_meter",
      {
        method: "GET",
      },
    );
    return response.text();
  }
  async getMatches() {
    const response = await this._call(
      "https://api.gotinder.com/v2/matches?count=100",
      {
        method: "GET",
      },
    );
    return response.text();
  }

  async useEmail({ email }) {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/login",
      {
        method: "POST",
        body: protocol.AuthGatewayRequest.encode({
          email: {
            email,
            refreshToken: {
              value: this.refreshToken,
            },
          },
        }).finish(),
      },
    );
    const decoded = protocol.AuthGatewayResponse.decode(
      Buffer.from(await (await response.blob()).arrayBuffer()),
    );
    this.assignDecodedValues(decoded);
    return decoded;
  }
  async startOnboarding() {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
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
      },
    );
    return await response.json();
  }
  async setName({ name }) {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
        method: "POST",
        body: JSON.stringify({ fields: [{ data: name, name: "name" }] }),
        headers: {
          token: this.onboardingToken,
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    return await response.json();
  }
  async setBirthDate({ birthDate }) {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
        method: "POST",
        body: JSON.stringify({
          fields: [{ data: birthDate, name: "birth_date" }],
        }),
        headers: {
          token: this.onboardingToken,
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    return await response.json();
  }
  async setGender({ gender }) {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
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
      },
    );
    return await response.json();
  }
  async setInterestedInGender({ gender }) {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
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
      },
    );
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
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          token: this.onboardingToken,
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    return await response.json();
  }
  async photo({ data }) {
    const filename = v1();
    const boundary = v1();
    const payload = Buffer.concat([
      Buffer.from(
        "--" +
          boundary +
          "\r\n" +
          'Content-Disposition: form-data; name="photo"; filename="' +
          filename +
          '"\r\nContent-Type: image/jpeg\r\nContent-Length: ' +
          String(data.length) +
          "\r\n\r\n",
      ),
      data,
    ]);
    return (
      await this._call(
        "https://api.gotinder.com/v2/onboarding/photo?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
        {
          method: "POST",
          body: payload,
          headers: {
            token: this.onboardingToken,
            "content-type": "multipart/form-data; boundary=" + boundary,
            "content-length": String(payload.length),
          },
        },
      )
    ).json();
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
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields?requested=tinder_rules&requested=name&requested=birth_date&requested=gender&requested=custom_gender&requested=show_gender_on_profile&requested=photos&requested=email&requested=allow_email_marketing&requested=consents&requested=schools&requested=interested_in_gender&requested=show_same_orientation_first&requested=show_orientation_on_profile&requested=sexual_orientations&requested=user_interests&requested=relationship_intent&requested=distance_filter",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          token: this.onboardingToken,
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    return await response.json();
  }
  async healthCheckAuth() {
    return (
      await fetch("https://api.gotinder.com/healthcheck/auth", {
        method: "GET",
        agent:
          this.proxyOptions && new (SocksProxyAgent as any)(this.proxyOptions),
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
          "app-session-time-elapsed": String(
            this.getAppSessionTimeElapsed().toFixed(3),
          ),
          "install-id": this.installId,
          "encoded-device-model": this.encodedDeviceModel,
          "encoded-device-carrier": this.encodedDeviceCarrier,
          "mobile-country-code": String(this.mobileCountryCode),
          "mobile-network-code": String(this.mobileNetworkCode),
          "accept-encoding": "gzip",
        },
      } as any)
    ).json();
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
  static fromJSON(s: string) {
    return this.fromObject(JSON.parse(s));
  }
  async purchasePaymentCard(o: IAddNewCardRequest): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/payment/card",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseCcPidCancel(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/cc/{pid}/cancel",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseCcPidAutoRenew(o: any): Promise<ICreditCardPurchaseResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/cc/{pid}/auto-renew",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchasePaymentLatest(o: any): Promise<ICurrentCardInfoResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/payment/latest",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseCcTaxZipCode(o: IPricingRequest): Promise<IPricingResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/cc/tax/{zip_code}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseCc(
    o: ICreditCardPurchaseRequest,
  ): Promise<ICreditCardPurchaseResponse> {
    const response = await this._call("https://api.gotinder.com/purchase/cc", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async purchaseCc3d(
    o: IThreeDSAuthApiRequestChallengeShopperRequest,
  ): Promise<IThreeDSAuthApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/cc/3d",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseCcRestore(o: any): Promise<IRestorePurchaseResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/cc/restore",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiencesHighlights(o: any): Promise<IHighlightsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences/highlights",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileIncludeUserAvailableDescriptors(
    o: any,
  ): Promise<IHeightDescriptorResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile?include=user,available_descriptors",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileUserIncludeUser(
    o: ISaveHeightRequest,
  ): Promise<IHeightDescriptorResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/user?include=user",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async userinterestsSearch(o: any): Promise<IUserInterestsSearchResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/userinterests/search",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async friendsRequestGenerate(
    o: IProfileShareFriendRequestResponse,
  ): Promise<IProfileShareFriendRequestResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/friends/request/generate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async friendsAll(o: any): Promise<IProfileShareFriendsListResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/friends/all",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async insendioTemplatesActive(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/insendio/templates/active",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async insendioCampaignsRawId(o: any): Promise<ISingleCampaignResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/insendio/campaigns/{rawId}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async insendioCampaigns(o: any): Promise<ICampaignsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/insendio/campaigns",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async notifications(o: any): Promise<INotificationListResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/notifications",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async notificationsNotificationTimestamp(
    o: IOpenedNotificationBody,
  ): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/notifications/{notificationTimestamp}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async insendioCampaignsView(o: ICampaignViewedBody): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/insendio/campaigns/view",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async insendioCampaignsCampaignIdSubmit(o: IAnswerBody): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/insendio/campaigns/{campaignId}/submit",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async notificationsRead(
    o: IUpdateNotificationReadStatusBody,
  ): Promise<INotificationReadStatusResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/notifications/read",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async soterRecsRoomId(o: any): Promise<IDionysusRecsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/soter/recs/{room_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async dynamicuiConfigurationContent(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/dynamicui/configuration/content",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async authAccountRecovery(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/account_recovery",
      { method: "POST", body: protocol.AuthGatewayRequest.encode(o).finish() },
    );
    return response;
  }
  async authPhoneUpdate(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v3/auth/phone_update",
      { method: "POST", body: protocol.AuthGatewayRequest.encode(o).finish() },
    );
    return response;
  }
  async verificationUnderageJpStatus(
    o: IAgeVerificationRequest,
  ): Promise<IAgeVerificationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/verification/underage/jp/status",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationUnderageGlobal(o: any): Promise<IAgeVerificationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/verification/underage/global",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async ageVerificationUrl(o: any): Promise<IAgeVerificationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/1.0/age-verification/url",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async publishAppBinary(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v3/publish/app/binary",
      {
        method: "POST",
        body: protocol.AppEventPublishRequest.encode(o).finish(),
      },
    );
    return response;
  }
  async mediaservicePlaceholders(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/placeholders",
      {
        method: "POST",
        body: protocol.CreatePlaceholderRequest.encode(o).finish(),
      },
    );
    return protocol.null.decode(await (await response.blob()).arrayBuffer());
  }
  async mediaserviceAvatar(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/avatar",
      {
        method: "POST",
        body: protocol.UpdatePhotoAvatarRequest.encode(o).finish(),
      },
    );
    return protocol.null.decode(await (await response.blob()).arrayBuffer());
  }
  async mediaserviceDetails(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/details",
      {
        method: "POST",
        body: protocol.UpdateMediaDetailsRequest.encode(o).finish(),
      },
    );
    return protocol.null.decode(await (await response.blob()).arrayBuffer());
  }
  async mediaserviceOrder(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/order",
      { method: "POST", body: protocol.OrderMediaRequest.encode(o).finish() },
    );
    return protocol.null.decode(await (await response.blob()).arrayBuffer());
  }
  async mediaserviceLoop(o: IMultipartBodyPart): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/loop",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async mediaservicePhoto(o: IMultipartBodyPart): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/photo",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async mediaserviceVideo(o: IMultipartBodyPart): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/mediaservice/video",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async mediaSubmit(
    o: IMultipartBodyPart,
  ): Promise<ISubmittedMediaUploadResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/media/submit",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async suggestions(o: any): Promise<IApiMessageSuggestionsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/suggestions",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async messageSuggestions(o: any): Promise<IApiMessageSuggestionsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/message-suggestions",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async meta(o: IMetaRequestBody): Promise<any> {
    let payload;
    if (!Object.keys(o).length)
      payload = {
        force_fetch_resources: true,
        lat: 41.5074027,
        lon: -71.8992217,
      };
    else {
      payload = {
        force_fetch_resources: o.forceFetchResources || true,
        lat: (o.lat && Number(o.lat)) || 41.5074027,
        lon: (o.lon && Number(o.lon)) || -71.8992217,
      };
    }
    const response = await this._call("https://api.gotinder.com/v2/meta", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    return response;
  }
  async matchmakerRegistration(
    o: IMMRegistrationRequest,
  ): Promise<IMMSessionRegistrationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/matchmaker/registration",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileMutuals(o: any): Promise<IMutualsProfileResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/mutuals",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileIncludeUser(o: any): Promise<IMutualsSettingsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile?include=user",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async userconnectionsContacts(o: any): Promise<IContactUploadResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v3/userconnections/contacts",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async onboardingAutocomplete(o: any): Promise<IAutoCompleteResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/autocomplete",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async onboardingComplete(o: ICompleteUserRequest): Promise<IDataResponse> {
    if (!Object.keys(o).length)
      o = {
        fields: [
          {
            data: {
              max_age: (o as any).maxAge || 41,
              min_age: (o as any).minAge || 18,
            },
            name: "age_settings",
          },
        ],
      };
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/complete",
      {
        method: "POST",
        body: JSON.stringify(o),
        headers: {
          token: this.onboardingToken,
          "content-type": "application/json; charset=UTF-8",
        },
      },
    );
    return await response.json();
  }
  async onboardingUser(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/user",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async onboardingFields(o: IUpdateFieldsRequest): Promise<IFieldsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/fields",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async onboardingPhoto(o: IMultipartBodyPart): Promise<IFieldsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/onboarding/photo",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async matchesPresence(o: any): Promise<IMatchesPresenceResponse> {
    const response = await this._call(
      "https://api.gotinder.com/matches/presence",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async locationSearch(o: any): Promise<ILocationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/location/search",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tokengatewayPushSend(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/tokengateway/push/send",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceBlockRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/block/{room_id}",
      { method: "POST", body: protocol.BlockUserRequest.encode(o).finish() },
    );
    return protocol.any.decode(await (await response.blob()).arrayBuffer());
  }
  async roomserviceRoom(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/room",
      { method: "POST", body: protocol.CreateRoomRequest.encode(o).finish() },
    );
    return response;
  }
  async roomserviceEndRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/end/{room_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceJoinRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/join/{room_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceLeaveRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/leave/{room_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceRooms(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/rooms",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceReportRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/report/{room_id}",
      { method: "POST", body: protocol.ReportRoomRequest.encode(o).finish() },
    );
    return protocol.any.decode(await (await response.blob()).arrayBuffer());
  }
  async roomserviceStatusRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/status/{room_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async roomserviceRoomRoomId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/roomservice/room/{room_id}",
      { method: "POST", body: protocol.UpdateRoomRequest.encode(o).finish() },
    );
    return protocol.RoomServiceResponse.decode(
      await (await response.blob()).arrayBuffer(),
    );
  }
  async v4ReportTree(o: any): Promise<IGetUserReportingTreeResponseMapValue> {
    const response = await this._call(
      "https://api.gotinder.com/v4/report/tree",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async v4ReportNew(o: any): Promise<IGetUserReportingTreeResponseMapValue> {
    const response = await this._call(
      "https://api.gotinder.com/v4/report/new",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async initiateVideoMatchId(
    o: IStartVideoChatRequest,
  ): Promise<IStartVideoChatResponse> {
    const response = await this._call(
      "https://api.gotinder.com/initiate_video/{match_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async videoCallStatusMatchId(
    o: IUpdateVideoChatConsentRequest,
  ): Promise<IVideoChatConsentResponse> {
    const response = await this._call(
      "https://api.gotinder.com/video_call_status/{match_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async gamesConfiguration(o: any): Promise<IGetGamesConfigurationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/games/configuration",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async games(o: IPostGamesRequest): Promise<IGamesResponse> {
    const response = await this._call("https://api.gotinder.com/v2/games", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async gamesMove(o: IPostGamesMoveRequest): Promise<IGamesResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/games/move",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async suggestionsDismissal(o: IPutSuggestionsDismissalRequest): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/suggestions/dismissal",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async surefireReferral(o: IReferralRequest): Promise<IReferralResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/surefire/referral",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async chatRooms(o: any): Promise<IGetChatRoomResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/chat-rooms",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async chatRoomsRegistration(
    o: IChatRoomRegistrationRequest,
  ): Promise<IChatRoomRegistrationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/chat-rooms/registration",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async chatRoomsInteractions(
    o: IPostChatRoomInteractionRequest,
  ): Promise<IGetChatRoomInteractionsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/chat-rooms/interactions",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async vendorUserTokensGarboUrl(o: any): Promise<IGarboUrlResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/vendor-user-tokens/garbo/url",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async safetyCenterIndexJson(
    o: any,
  ): Promise<IGetSafetyCenterContentResponse> {
    const response = await this._call(
      "https://api.gotinder.com/safety-center/index.json",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async matchSettingsSelfieVerificationMatchId(
    o: IRequestVerificationResponse,
  ): Promise<IRequestVerificationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/match-settings/selfie-verification/{matchId}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationFacemapClientKeys(
    o: any,
  ): Promise<IFacetecKeyChainResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/verification/facemap/client-keys",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationFacemapSessionToken(
    o: any,
  ): Promise<IFacetecSessionTokenResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/verification/facemap/session-token",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationSelfieStart(
    o: any,
  ): Promise<IStartSelfieVerificationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/verification/selfie/start",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationFacemapPhotoMatch(o: any): Promise<IFaceScanResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/verification/facemap/photo-match",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async accountRecoverySend(
    o: IRequestAccountRecoveryLinkBody,
  ): Promise<IRequestAccountRecoveryLinkResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/account/recovery/send",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async authSmsSend(
    o: IRequestOneTimePasswordBody,
  ): Promise<IRequestOneTimePasswordResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/auth/sms/send",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async accountRecoveryConfirm(
    o: IVerifyAccountRecoveryLinkBody,
  ): Promise<IVerifyAccountRecoveryLinkResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/account/recovery/confirm",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async authSmsValidate(
    o: IVerifyOneTimePasswordBody,
  ): Promise<IVerifyOneTimePasswordResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/auth/sms/validate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async androidTrackerId(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/{android_tracker_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async track(o: any): Promise<any> {
    const response = await this._call("https://api.gotinder.com/v1/track", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async dynamicuiTappycontent(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/dynamicui/tappycontent",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async imageFirst1(o: IMultipartBodyPart): Promise<IImageUploadResponse> {
    const response = await this._call(
      "https://api.gotinder.com/image?first=1",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async image(o: IMultipartBodyPart): Promise<IImageUploadResponse> {
    const response = await this._call("https://api.gotinder.com/image", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async imageMain1(o: IMultipartBodyPart): Promise<IImageUploadResponse> {
    const response = await this._call("https://api.gotinder.com/image?main=1", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async mediaVideo(o: IMultipartBodyPart): Promise<IVideoUploadResponse> {
    const response = await this._call("https://api.gotinder.com/media/video", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async userShareLinkId(o: any): Promise<IAcceptFriendMatchInviteResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/user/share/{linkId}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tinderuApply(o: any): Promise<ITinderUResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/tinderu/apply",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tinderuApplyForm(
    o: ITinderUSheerIdRequest,
  ): Promise<ITinderUSheerIdResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/tinderu/apply/form",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async instagramAuthenticate(
    o: IInstagramAuthRequestBody,
  ): Promise<IInstagramAuthResponse> {
    const response = await this._call(
      "https://api.gotinder.com/instagram/authenticate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseDiscountEligibility(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/purchase/discount/eligibility",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileTutorials(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/tutorials",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileSpotifySync(o: IConnectSpotifyRequest): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/spotify/sync",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async readreceiptMatchId(o: any) {
    const response = await this._call(
      "https://api.gotinder.com/v2/readreceipt/{match_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response;
  }
  async exploreRecs(o: any): Promise<ICuratedRecsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/explore/recs",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseDiscountSponsoredMessage(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/purchase/discount/sponsored-message",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatchCount(o: any): Promise<IFastMatchCountResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/count",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatch(
    o: IFastMatchFilteredRecsRequestBody,
  ): Promise<IFastMatchRecsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatchTeaser(o: any): Promise<IFastMatchPreviewResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/teaser",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatchTeasers(o: any): Promise<IFastMatchRecsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/teasers",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async instagramAuthorize(o: any): Promise<IInstagramAuthUrlResponse> {
    const response = await this._call(
      "https://api.gotinder.com/instagram/authorize",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatchNewcount(o: any): Promise<IFastMatchNewCountResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/newcount",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async recsCore(o: any): Promise<IRecsResponse> {
    const response = await fetch(
      "https://api.gotinder.com/v2/recs/core?locale=en&distance_setting=mi",
      {
        method: "GET",
        headers: {
          "support-short-video": String(1),
          "connection-speed": String(1112),
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
          "app-session-time-elapsed": String(
            this.getAppSessionTimeElapsed().toFixed(3),
          ),
          "user-session-id": this.userSessionId,
          "user-session-time-elapsed": String(
            this.getUserSessionTimeElapsed()?.toFixed(3),
          ),
          "install-id": this.installId,
          "accept-encoding": "gzip",
        },
        agent: this.proxyOptions && new SocksProxyAgent(this.proxyOptions),
        compress: true,
      },
    );
    return await response;
  }
  async fastMatchSecretAdmirer(o: any): Promise<ISecretAdmirerResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/secret-admirer",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async mediaIds(o: IMediaIdsBody): Promise<IMediaIdsResponse> {
    const response = await this._call("https://api.gotinder.com/media-ids", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async profileAutocomplete(o: any): Promise<IAutoCompleteResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/autocomplete",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async campaignsCampaignId(o: any): Promise<ICampaignResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/campaigns/{campaign_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async explore(o: any): Promise<IApiCatalogResponse> {
    const response = await this._call("https://api.gotinder.com/v2/explore", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async subscriptionsTopic(o: any): Promise<ICrmSubscriptionResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/subscriptions/{topic}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async deviceCheckAndroid(o: any): Promise<IDeviceCheckResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/device-check/android",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiences(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async inboxMessages(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/inbox/messages",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async instagramMedia(o: any): Promise<IInstagramMediaResponse> {
    const response = await this._call(
      "https://api.gotinder.com/instagram/media",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async myLikes(o: any): Promise<ILikedUsersRecsResponse> {
    const response = await this._call("https://api.gotinder.com/v2/my-likes", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async matchesMatchId(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/matches/{match_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async locationPopular(o: any): Promise<ILocationResponse> {
    const response = await this._call(
      "https://api.gotinder.com/location/popular",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profile(o: any): Promise<IProfileV2Response> {
    const response = await this._call("https://api.gotinder.com/v2/profile", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async crmapiPrompts(o: any): Promise<IPromptsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/crmapi/prompts",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async rosettaLocalization(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/rosetta/localization",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiencesSeries(o: any): Promise<IApiSeriesResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences/series",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async userUserIdShare(o: IShareLinkRequestBody): Promise<IShareLinkResponse> {
    const response = await this._call(
      "https://api.gotinder.com/user/{user_id}/share",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async metaSuperlikeInfo(o: any): Promise<ISuperlikeStatusInfoResponse> {
    const response = await this._call(
      "https://api.gotinder.com/meta/superlike/info",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async themesThemeId(o: any): Promise<IThemeResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/themes/{theme_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async themesBatch(o: any): Promise<IThemeBatchResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/themes/batch",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async updates(o: IUpdatesRequestBody): Promise<any> {
    const response = await this._call("https://api.gotinder.com/updates", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async userUserId(o: any): Promise<IUserResponse> {
    const response = await this._call(
      "https://api.gotinder.com/user/{user_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }

  async topPicksRate(
    o: ITopPicksLikeRatingRequest,
  ): Promise<ITopPicksLikeRatingResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/top-picks/rate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async liveCount(o: any): Promise<ILiveCountsResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/live-count",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async surgeUser(o: any): Promise<ISwipeSurgeResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/surge/user",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async userRecommendedemailLinkId(
    o: any,
  ): Promise<IUsersRecommendedByEmailResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/user/recommendedemail/{linkId}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseOfferView(
    o: IPurchaseDiscountViewedRequestById,
  ): Promise<IPurchaseDiscountViewedResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/offer/view",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseDiscountView(
    o: IPurchaseDiscountViewedRequestByTypeAndCampaign,
  ): Promise<IPurchaseDiscountViewedResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/purchase/discount/view",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async matches(o: any): Promise<IMatchListResponse> {
    const response = await this._call("https://api.gotinder.com/v2/matches", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async matchesMatchIdMessages(o: any): Promise<IMessageListResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/matches/{match_id}/messages",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async passRecId(o: any): Promise<IPassRatingResponse> {
    const body = JSON.stringify({
      photoId: o.photoId,
      content_hash: o.content_hash,
      s_number: Number(o.s_number),
    }, null, 2);
    const response = await fetch("https://api.gotinder.com/pass/" + o.id, {
      method: "POST",
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
        "x-auth-token": this.xAuthToken,
        "persistent-device-id": this.persistentDeviceId,
        "app-session-id": this.appSessionId,
        "user-session-id": this.userSessionId,
        "app-session-time-elapsed": String(
          this.getAppSessionTimeElapsed().toFixed(3),
        ),
        "user-session-time-elapsed": String(
          this.getUserSessionTimeElapsed()?.toFixed(3),
        ),
        "install-id": this.installId,
	"content-type": "application/json; charset=UTF-8",
	"content-length": body.length,
        "accept-encoding": "gzip",
      },
      body
    });
    return await response.json();
  }

  async likeRecId(o: any): Promise<ILikeRatingResponse> {
    const response = await this._call(`https://api.gotinder.com/like/${o.id}`, {
      method: "POST",
      body: JSON.stringify(o),
    });

    return await response;
  }
  async passportUserPrecheck(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/passport/user/precheck",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async campaignsEnable(
    o: ICampaignPatchRequestBody,
  ): Promise<ICampaignResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/campaigns/enable",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiencesJourneys(
    o: IApiJourneyBody,
  ): Promise<IApiUpdateJourneyResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences/journeys",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiencesJourneysComplete(
    o: IApiJourneyBody,
  ): Promise<IApiCompleteJourneyResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences/journeys/complete",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async fastMatchSecretAdmirerRate(
    o: ISecretAdmirerRateRequest,
  ): Promise<ISecretAdmirerRateApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/fast-match/secret-admirer/rate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileUsername(o: IUpdateUsernameRequestBody): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/profile/username",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseIac(o: IInAppCurrencyPurchaseRequestBody): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/purchase/iac",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async campaignsEventsRegister(
    o: ICampaignEventRegistrationRequest,
  ): Promise<ICampaignResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/campaigns/events/register",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async experiencesJourneysStart(
    o: IApiStartJourneyBody,
  ): Promise<IApiStartJourneyDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/experiences/journeys/start",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileSpotifyResync(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/spotify/resync",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileExperiences(
    o: IExperiencesUpdateRequestBody,
  ): Promise<IExperienceUpdateResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/experiences",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profilePlusControl(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/plus_control",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async giphySearch(o: any): Promise<IGiphyApiResponse> {
    const response = await this._call("https://api.gotinder.com/giphy/search", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async profileSpotifyPopular(o: any): Promise<IPopularSpotifyTrackResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/spotify/popular",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileSpotifySearch(o: any): Promise<ISearchSpotifyResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/spotify/search",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tenorSearch(o: any): Promise<ITenorApiResponse> {
    const response = await this._call("https://api.gotinder.com/tenor/search", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async harassingmessagesMatchId(
    o: ISendHarassingMessageDecisionRequestBody,
  ): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/v2/harassingmessages/{matchId}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async userMatchesMatchId(o: ISendMessageRequestBody): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/user/matches/{match_id}",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseLogs(o: IPurchaseLogRequest): Promise<IPurchaseLogResponse> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/logs",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async media(o: IOrderProfilePhotosBody): Promise<any> {
    const response = await this._call("https://api.gotinder.com/media", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async likeRecIdSuper(
    o: ISuperLikeContentBody,
  ): Promise<ISuperLikeRatingResponse> {
    const response = await this._call(
      "https://api.gotinder.com/like/{rec_id}/super",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async giphyTrending(o: any): Promise<IGiphyApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/giphy/trending",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tenorTrending(o: any): Promise<ITenorApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/tenor/trending",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileConsentsMessage(
    o: IMessageConsentRequestBody,
  ): Promise<IMessageConsentResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/consents/message",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileUser(o: IOnlinePresenceSettingsUpdateRequestBody) {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/user",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response;
  }
  async profileSchool(
    o: IUpdateSchoolRequestBody,
  ): Promise<IUpdateSchoolResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/school",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileTinderu(
    o: ITinderUProfileRequestBody,
  ): Promise<ITinderUResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/tinderu",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async promosValidate(
    o: IPurchasePromotionsValidateRequest,
  ): Promise<IPurchasePromotionsValidateResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/promos/validate",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async purchaseAndroid(o: any): Promise<any> {
    const response = await this._call(
      "https://api.gotinder.com/purchase/android",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async tinderuVerify(o: IVerifyRequest): Promise<ITinderUResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/tinderu/verify",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async healthcheckAuth(o: any): Promise<IHealthcheckResponse> {
    const response = await this._call(
      "https://api.gotinder.com/healthcheck/auth",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async challengeVerify(o: IChallengeAnswerVerificationRequest) {
    const response = await this._call(
      "https://api.gotinder.com/challenge/verify",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response;
  }
  async verificationUnderageState(o: any): Promise<IDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/verification/underage/state",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async verificationUnderageUrl(o: any): Promise<IVerificationUrlResponse> {
    const response = await this._call(
      "https://api.gotinder.com/verification/underage/url",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async boostResult(o: any): Promise<any> {
    const response = await this._call("https://api.gotinder.com/boost/result", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async consumablesBouncerBypass(o: any): Promise<IBouncerBypassDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/consumables/bouncer-bypass",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async topPicksCategoryDiscovery(
    o: any,
  ): Promise<ICategoryDiscoveryApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/top-picks-category/discovery",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async topPicksCategory(o: any): Promise<ICategoryApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/top-picks-category",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async topPicksCategoryPreview(o: any): Promise<ICategoryApiResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/top-picks-category/preview",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async profileConsents(o: IConsentRequest): Promise<IConsentResponse> {
    const response = await this._call(
      "https://api.gotinder.com/v2/profile/consents",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async connectIncludeIcebreakersMatchPrompts(
    o: any,
  ): Promise<IConnectDataResponse> {
    const response = await this._call(
      "https://api.gotinder.com/connect?include=icebreakers,match_prompts",
      { method: "POST", body: JSON.stringify(o) },
    );
    return await response.json();
  }
  async contacts(o: any): Promise<any> {
    const response = await this._call("https://api.gotinder.com/v1/contacts", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async buckets(o: IBucketsRequestBody): Promise<IBucketsResponse> {
    const response = await this._call("https://api.gotinder.com/v2/buckets", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
  async boost(o: IBoostRequest): Promise<any> {
    const response = await this._call("https://api.gotinder.com/boost", {
      method: "POST",
      body: JSON.stringify(o),
    });
    return await response.json();
  }
}
