type School = any;
type MessageConsentResponseMessageConsent = any;
type MessageConsentCode = any;
type MediaId = any;
type PurchaseLog = any;
type TenorApiResponseTenorGif = any;
type RawJson = string;
type ApiMatch = any;
type User = any;
type ThemeResponse = any;
type Prompt = any;
type Photo = any;
type ProcessingVideo = any;
type Pose = any;
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
interface IUserInterestsSearchResponse {
    user_interests?: string;
}
interface IProfileShareFriendRequestResponse {
    link?: string;
}
interface IProfileShareFriendsListResponse {
    friends?: ProfileShareFriendsListResponseFriend[];
}
interface IDataResponse {
}
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
interface IOpenedNotificationBody {
}
interface ICampaignViewedBody {
    campaignId?: string;
    type?: string;
}
interface IAnswerBody {
    responses?: AnswerBodyAnswerId[];
}
interface IUpdateNotificationReadStatusBody {
    read_timestamp?: string;
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
interface IMultipartBodyPart {
}
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
interface IMMRegistrationRequest {
}
interface IMMSessionRegistrationResponse {
    invitation_id?: string;
    is_new_matchmaking_session?: string;
    expires_at?: string;
}
interface IMutualsProfileResponse {
    data?: string;
}
interface IMutualsSettingsResponse {
    data?: string;
}
interface IContactUploadResponse {
}
interface IAutoCompleteResponse {
    results?: AutoCompleteSuggestion[];
}
interface ICompleteUserRequest {
}
interface IFieldsResponse {
}
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
interface ILocationResponse {
}
interface IGetUserReportingTreeResponseMapValue {
}
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
interface IVideoUploadResponse {
    assets?: Photo[];
    videos_processing?: ProcessingVideo[];
}
interface IAcceptFriendMatchInviteResponse {
    matchId?: string;
}
interface ITinderUResponse {
}
interface ITinderUSheerIdRequest {
}
interface ITinderUSheerIdResponse {
}
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
interface ICuratedRecsResponse {
}
interface IFastMatchCountResponse {
    data?: string;
    meta?: string;
}
interface IFastMatchFilteredRecsRequestBody {
    filter?: string;
    page_token?: string;
}
interface IFastMatchRecsResponse {
}
interface IFastMatchPreviewResponse {
}
interface IInstagramAuthUrlResponse {
    ig_auth_url?: string;
}
interface IFastMatchNewCountResponse {
    new_count_token?: string;
}
interface IRecsResponse {
}
interface ISecretAdmirerResponse {
}
interface IMediaIdsBody {
    num_pending_media?: string;
}
interface IMediaIdsResponse {
    media_ids?: string[];
}
interface ICampaignResponse {
}
interface ICrmSubscriptionResponse {
}
interface IDeviceCheckResponse {
    nonce?: string;
    nonce_version?: string;
    action?: string;
}
interface IInstagramMediaResponse {
}
interface ILikedUsersRecsResponse {
    page_token?: string;
}
interface IProfileV2Response {
}
interface IPromptsResponse {
    prompts?: Prompt[];
}
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
interface ISuperlikeStatusInfoResponse {
}
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
interface IUserResponse {
}
interface ILikeRatingResponse {
}
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
interface IMessageListResponse {
    messages?: RawJson[];
    next_page_token?: string;
}
interface IPassRatingResponse {
}
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
interface ISecretAdmirerRateApiResponse {
}
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
interface IGiphyApiResponse {
}
interface IPopularSpotifyTrackResponse {
    popular_on_spotify_playlist?: string;
}
interface ISearchSpotifyResponse {
    tracks?: string;
}
interface ITenorApiResponse {
    results?: TenorApiResponseTenorGif[];
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
interface IPurchaseLogResponse {
    ProcessedItems?: string;
    UnprocessedIndices?: number[];
}
interface IOrderProfilePhotosBody {
    change_order?: MediaId[];
}
interface ISuperLikeContentBody {
    liked_content_id?: string;
    liked_content_type?: string;
    reaction_id?: string;
    swipe_note?: string;
    room_id?: string;
    explore_catalog_id?: string;
}
interface ISuperLikeRatingResponse {
}
interface IMessageConsentRequestBody {
    consents?: MessageConsentCode[];
}
interface IMessageConsentResponse {
    consents?: MessageConsentResponseMessageConsent[];
}
interface IOnlinePresenceSettingsUpdateRequestBody {
    user_presence_disabled?: string;
}
interface IUpdateSchoolRequestBody {
    schools?: School[];
}
interface IUpdateSchoolResponse {
}
interface ITinderUProfileRequestBody {
}
interface IPurchasePromotionsValidateRequest {
    identifier?: string;
}
interface IPurchasePromotionsValidateResponse {
}
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
interface IConsentRequest {
}
interface IConsentResponse {
}
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
export declare class TinderClient {
    proxyOptions: any;
    persistentDeviceId: string;
    appSessionId: string;
    appSessionStartTime: number;
    installId: string;
    appsFlyerId: string;
    advertisingId: string;
    funnelSessionId: string;
    encodedDeviceModel: string;
    encodedDeviceCarrier: string;
    mobileCountryCode: number;
    mobileNetworkCode: number;
    tinderVersion: string;
    storeVariant: string;
    language: string;
    platformVariant: string;
    platform: string;
    appVersion: string;
    osVersion: string;
    userAgent: string;
    refreshToken: string;
    userId: string;
    onboardingToken: string;
    xAuthToken: string;
    userSessionStartTime: number;
    token: string;
    userSessionId: string;
    constructor({ userAgent, proxyOptions, persistentDeviceId, appSessionId, appSessionStartTime, installId, encodedDeviceModel, encodedDeviceCarrier, mobileCountryCode, mobileNetworkCode, tinderVersion, storeVariant, osVersion, appVersion, platform, platformVariant, language, token, funnelSessionId, appsFlyerId, advertisingId, refreshToken, userId, onboardingToken, xAuthToken, userSessionId, userSessionStartTime, }?: any);
    static getField(response: any, name: string): any;
    getAppSessionTimeElapsed(): number;
    getUserSessionTimeElapsed(): number;
    assignDecodedValues(response: any): void;
    _call(url: any, config?: any): Promise<any>;
    authLogin({ phoneNumber }: {
        phoneNumber: any;
    }): Promise<any>;
    verifyOtp({ phoneNumber, otp }: {
        phoneNumber: any;
        otp: any;
    }): Promise<any>;
    getAuthToken(): Promise<any>;
    checkIp(): Promise<any>;
    verifyEmail({ otp }: {
        otp: any;
    }): Promise<any>;
    pushDevices(): Promise<any>;
    profileData(): Promise<any>;
    getMatches(): Promise<any>;
    useEmail({ email }: {
        email: any;
    }): Promise<any>;
    startOnboarding(): Promise<any>;
    setName({ name }: {
        name: any;
    }): Promise<any>;
    setBirthDate({ birthDate }: {
        birthDate: any;
    }): Promise<any>;
    setGender({ gender }: {
        gender: any;
    }): Promise<any>;
    setInterestedInGender({ gender }: {
        gender: any;
    }): Promise<any>;
    setSchool({ schoolId, name, displayed }: {
        schoolId: any;
        name: any;
        displayed: any;
    }): Promise<any>;
    photo({ data }: {
        data: any;
    }): Promise<any>;
    setInterests({ interests }: {
        interests: any;
    }): Promise<any>;
    healthCheckAuth(): Promise<any>;
    static fromObject(o: any): TinderClient;
    toObject(): {
        userId: string;
        onboardingToken: string;
        refreshToken: string;
        userAgent: string;
        persistentDeviceId: string;
        appSessionId: string;
        appSessionStartTime: number;
        installId: string;
        encodedDeviceModel: string;
        encodedDeviceCarrier: string;
        mobileCountryCode: number;
        mobileNetworkCode: number;
        tinderVersion: string;
        storeVariant: string;
        osVersion: string;
        appVersion: string;
        platform: string;
        appsFlyerId: string;
        advertisingId: string;
        funnelSessionId: string;
        platformVariant: string;
        userSessionId: string;
        token: string;
        language: string;
        xAuthToken: string;
        userSessionStartTime: number;
    };
    toJSON(): string;
    static fromJSON(s: string): TinderClient;
    purchasePaymentCard(o: IAddNewCardRequest): Promise<any>;
    purchaseCcPidCancel(o: any): Promise<any>;
    purchaseCcPidAutoRenew(o: any): Promise<ICreditCardPurchaseResponse>;
    purchasePaymentLatest(o: any): Promise<ICurrentCardInfoResponse>;
    purchaseCcTaxZipCode(o: IPricingRequest): Promise<IPricingResponse>;
    purchaseCc(o: ICreditCardPurchaseRequest): Promise<ICreditCardPurchaseResponse>;
    purchaseCc3d(o: IThreeDSAuthApiRequestChallengeShopperRequest): Promise<IThreeDSAuthApiResponse>;
    purchaseCcRestore(o: any): Promise<IRestorePurchaseResponse>;
    experiencesHighlights(o: any): Promise<IHighlightsResponse>;
    profileIncludeUserAvailableDescriptors(o: any): Promise<IHeightDescriptorResponse>;
    profileUserIncludeUser(o: ISaveHeightRequest): Promise<IHeightDescriptorResponse>;
    userinterestsSearch(o: any): Promise<IUserInterestsSearchResponse>;
    friendsRequestGenerate(o: IProfileShareFriendRequestResponse): Promise<IProfileShareFriendRequestResponse>;
    friendsAll(o: any): Promise<IProfileShareFriendsListResponse>;
    insendioTemplatesActive(o: any): Promise<IDataResponse>;
    insendioCampaignsRawId(o: any): Promise<ISingleCampaignResponse>;
    insendioCampaigns(o: any): Promise<ICampaignsResponse>;
    notifications(o: any): Promise<INotificationListResponse>;
    notificationsNotificationTimestamp(o: IOpenedNotificationBody): Promise<any>;
    insendioCampaignsView(o: ICampaignViewedBody): Promise<any>;
    insendioCampaignsCampaignIdSubmit(o: IAnswerBody): Promise<any>;
    notificationsRead(o: IUpdateNotificationReadStatusBody): Promise<INotificationReadStatusResponse>;
    soterRecsRoomId(o: any): Promise<IDionysusRecsResponse>;
    dynamicuiConfigurationContent(o: any): Promise<any>;
    authAccountRecovery(o: any): Promise<any>;
    authPhoneUpdate(o: any): Promise<any>;
    verificationUnderageJpStatus(o: IAgeVerificationRequest): Promise<IAgeVerificationResponse>;
    verificationUnderageGlobal(o: any): Promise<IAgeVerificationResponse>;
    ageVerificationUrl(o: any): Promise<IAgeVerificationResponse>;
    publishAppBinary(o: any): Promise<any>;
    mediaservicePlaceholders(o: any): Promise<any>;
    mediaserviceAvatar(o: any): Promise<any>;
    mediaserviceDetails(o: any): Promise<any>;
    mediaserviceOrder(o: any): Promise<any>;
    mediaserviceLoop(o: IMultipartBodyPart): Promise<any>;
    mediaservicePhoto(o: IMultipartBodyPart): Promise<any>;
    mediaserviceVideo(o: IMultipartBodyPart): Promise<any>;
    mediaSubmit(o: IMultipartBodyPart): Promise<ISubmittedMediaUploadResponse>;
    suggestions(o: any): Promise<IApiMessageSuggestionsResponse>;
    messageSuggestions(o: any): Promise<IApiMessageSuggestionsResponse>;
    meta(o: IMetaRequestBody): Promise<IMetaDataResponse>;
    matchmakerRegistration(o: IMMRegistrationRequest): Promise<IMMSessionRegistrationResponse>;
    profileMutuals(o: any): Promise<IMutualsProfileResponse>;
    profileIncludeUser(o: any): Promise<IMutualsSettingsResponse>;
    userconnectionsContacts(o: any): Promise<IContactUploadResponse>;
    onboardingAutocomplete(o: any): Promise<IAutoCompleteResponse>;
    onboardingComplete(o: ICompleteUserRequest): Promise<IDataResponse>;
    onboardingUser(o: any): Promise<IDataResponse>;
    onboardingFields(o: IUpdateFieldsRequest): Promise<IFieldsResponse>;
    onboardingPhoto(o: IMultipartBodyPart): Promise<IFieldsResponse>;
    matchesPresence(o: any): Promise<IMatchesPresenceResponse>;
    locationSearch(o: any): Promise<ILocationResponse>;
    tokengatewayPushSend(o: any): Promise<any>;
    roomserviceBlockRoomId(o: any): Promise<any>;
    roomserviceRoom(o: any): Promise<any>;
    roomserviceEndRoomId(o: any): Promise<any>;
    roomserviceJoinRoomId(o: any): Promise<any>;
    roomserviceLeaveRoomId(o: any): Promise<any>;
    roomserviceRooms(o: any): Promise<any>;
    roomserviceReportRoomId(o: any): Promise<any>;
    roomserviceStatusRoomId(o: any): Promise<any>;
    roomserviceRoomRoomId(o: any): Promise<any>;
    v4ReportTree(o: any): Promise<IGetUserReportingTreeResponseMapValue>;
    v4ReportNew(o: any): Promise<IGetUserReportingTreeResponseMapValue>;
    initiateVideoMatchId(o: IStartVideoChatRequest): Promise<IStartVideoChatResponse>;
    videoCallStatusMatchId(o: IUpdateVideoChatConsentRequest): Promise<IVideoChatConsentResponse>;
    gamesConfiguration(o: any): Promise<IGetGamesConfigurationResponse>;
    games(o: IPostGamesRequest): Promise<IGamesResponse>;
    gamesMove(o: IPostGamesMoveRequest): Promise<IGamesResponse>;
    suggestionsDismissal(o: IPutSuggestionsDismissalRequest): Promise<any>;
    surefireReferral(o: IReferralRequest): Promise<IReferralResponse>;
    chatRooms(o: any): Promise<IGetChatRoomResponse>;
    chatRoomsRegistration(o: IChatRoomRegistrationRequest): Promise<IChatRoomRegistrationResponse>;
    chatRoomsInteractions(o: IPostChatRoomInteractionRequest): Promise<IGetChatRoomInteractionsResponse>;
    vendorUserTokensGarboUrl(o: any): Promise<IGarboUrlResponse>;
    safetyCenterIndexJson(o: any): Promise<IGetSafetyCenterContentResponse>;
    matchSettingsSelfieVerificationMatchId(o: IRequestVerificationResponse): Promise<IRequestVerificationResponse>;
    verificationFacemapClientKeys(o: any): Promise<IFacetecKeyChainResponse>;
    verificationFacemapSessionToken(o: any): Promise<IFacetecSessionTokenResponse>;
    verificationSelfieStart(o: any): Promise<IStartSelfieVerificationResponse>;
    verificationFacemapPhotoMatch(o: any): Promise<IFaceScanResponse>;
    accountRecoverySend(o: IRequestAccountRecoveryLinkBody): Promise<IRequestAccountRecoveryLinkResponse>;
    authSmsSend(o: IRequestOneTimePasswordBody): Promise<IRequestOneTimePasswordResponse>;
    accountRecoveryConfirm(o: IVerifyAccountRecoveryLinkBody): Promise<IVerifyAccountRecoveryLinkResponse>;
    authSmsValidate(o: IVerifyOneTimePasswordBody): Promise<IVerifyOneTimePasswordResponse>;
    androidTrackerId(o: any): Promise<any>;
    track(o: any): Promise<any>;
    dynamicuiTappycontent(o: any): Promise<any>;
    imageFirst1(o: IMultipartBodyPart): Promise<IImageUploadResponse>;
    image(o: IMultipartBodyPart): Promise<IImageUploadResponse>;
    imageMain1(o: IMultipartBodyPart): Promise<IImageUploadResponse>;
    mediaVideo(o: IMultipartBodyPart): Promise<IVideoUploadResponse>;
    userShareLinkId(o: any): Promise<IAcceptFriendMatchInviteResponse>;
    tinderuApply(o: any): Promise<ITinderUResponse>;
    tinderuApplyForm(o: ITinderUSheerIdRequest): Promise<ITinderUSheerIdResponse>;
    instagramAuthenticate(o: IInstagramAuthRequestBody): Promise<IInstagramAuthResponse>;
    purchaseDiscountEligibility(o: any): Promise<IDataResponse>;
    profileTutorials(o: any): Promise<any>;
    profileSpotifySync(o: IConnectSpotifyRequest): Promise<IDataResponse>;
    readreceiptMatchId(o: any): Promise<any>;
    exploreRecs(o: any): Promise<ICuratedRecsResponse>;
    purchaseDiscountSponsoredMessage(o: any): Promise<IDataResponse>;
    fastMatchCount(o: any): Promise<IFastMatchCountResponse>;
    fastMatch(o: IFastMatchFilteredRecsRequestBody): Promise<IFastMatchRecsResponse>;
    fastMatchTeaser(o: any): Promise<IFastMatchPreviewResponse>;
    fastMatchTeasers(o: any): Promise<IFastMatchRecsResponse>;
    instagramAuthorize(o: any): Promise<IInstagramAuthUrlResponse>;
    fastMatchNewcount(o: any): Promise<IFastMatchNewCountResponse>;
    recsCore(o: any): Promise<IRecsResponse>;
    fastMatchSecretAdmirer(o: any): Promise<ISecretAdmirerResponse>;
    mediaIds(o: IMediaIdsBody): Promise<IMediaIdsResponse>;
    profileAutocomplete(o: any): Promise<IAutoCompleteResponse>;
    campaignsCampaignId(o: any): Promise<ICampaignResponse>;
    explore(o: any): Promise<IApiCatalogResponse>;
    subscriptionsTopic(o: any): Promise<ICrmSubscriptionResponse>;
    deviceCheckAndroid(o: any): Promise<IDeviceCheckResponse>;
    experiences(o: any): Promise<any>;
    inboxMessages(o: any): Promise<IDataResponse>;
    instagramMedia(o: any): Promise<IInstagramMediaResponse>;
    myLikes(o: any): Promise<ILikedUsersRecsResponse>;
    matchesMatchId(o: any): Promise<IDataResponse>;
    locationPopular(o: any): Promise<ILocationResponse>;
    profile(o: any): Promise<IProfileV2Response>;
    crmapiPrompts(o: any): Promise<IPromptsResponse>;
    rosettaLocalization(o: any): Promise<any>;
    experiencesSeries(o: any): Promise<IApiSeriesResponse>;
    userUserIdShare(o: IShareLinkRequestBody): Promise<IShareLinkResponse>;
    metaSuperlikeInfo(o: any): Promise<ISuperlikeStatusInfoResponse>;
    themesThemeId(o: any): Promise<IThemeResponse>;
    themesBatch(o: any): Promise<IThemeBatchResponse>;
    updates(o: IUpdatesRequestBody): Promise<any>;
    userUserId(o: any): Promise<IUserResponse>;
    topPicksRate(o: ITopPicksLikeRatingRequest): Promise<ITopPicksLikeRatingResponse>;
    liveCount(o: any): Promise<ILiveCountsResponse>;
    surgeUser(o: any): Promise<ISwipeSurgeResponse>;
    userRecommendedemailLinkId(o: any): Promise<IUsersRecommendedByEmailResponse>;
    purchaseOfferView(o: IPurchaseDiscountViewedRequestById): Promise<IPurchaseDiscountViewedResponse>;
    purchaseDiscountView(o: IPurchaseDiscountViewedRequestByTypeAndCampaign): Promise<IPurchaseDiscountViewedResponse>;
    matches(o: any): Promise<IMatchListResponse>;
    matchesMatchIdMessages(o: any): Promise<IMessageListResponse>;
    passRecId(o: any): Promise<IPassRatingResponse>;
    likeRecId(o: any): Promise<ILikeRatingResponse>;
    passportUserPrecheck(o: any): Promise<IDataResponse>;
    campaignsEnable(o: ICampaignPatchRequestBody): Promise<ICampaignResponse>;
    experiencesJourneys(o: IApiJourneyBody): Promise<IApiUpdateJourneyResponse>;
    experiencesJourneysComplete(o: IApiJourneyBody): Promise<IApiCompleteJourneyResponse>;
    fastMatchSecretAdmirerRate(o: ISecretAdmirerRateRequest): Promise<ISecretAdmirerRateApiResponse>;
    profileUsername(o: IUpdateUsernameRequestBody): Promise<any>;
    purchaseIac(o: IInAppCurrencyPurchaseRequestBody): Promise<any>;
    campaignsEventsRegister(o: ICampaignEventRegistrationRequest): Promise<ICampaignResponse>;
    experiencesJourneysStart(o: IApiStartJourneyBody): Promise<IApiStartJourneyDataResponse>;
    profileSpotifyResync(o: any): Promise<IDataResponse>;
    profileExperiences(o: IExperiencesUpdateRequestBody): Promise<IExperienceUpdateResponse>;
    profilePlusControl(o: any): Promise<IDataResponse>;
    giphySearch(o: any): Promise<IGiphyApiResponse>;
    profileSpotifyPopular(o: any): Promise<IPopularSpotifyTrackResponse>;
    profileSpotifySearch(o: any): Promise<ISearchSpotifyResponse>;
    tenorSearch(o: any): Promise<ITenorApiResponse>;
    harassingmessagesMatchId(o: ISendHarassingMessageDecisionRequestBody): Promise<any>;
    userMatchesMatchId(o: ISendMessageRequestBody): Promise<any>;
    purchaseLogs(o: IPurchaseLogRequest): Promise<IPurchaseLogResponse>;
    media(o: IOrderProfilePhotosBody): Promise<any>;
    likeRecIdSuper(o: ISuperLikeContentBody): Promise<ISuperLikeRatingResponse>;
    giphyTrending(o: any): Promise<IGiphyApiResponse>;
    tenorTrending(o: any): Promise<ITenorApiResponse>;
    profileConsentsMessage(o: IMessageConsentRequestBody): Promise<IMessageConsentResponse>;
    profileUser(o: IOnlinePresenceSettingsUpdateRequestBody): Promise<any>;
    profileSchool(o: IUpdateSchoolRequestBody): Promise<IUpdateSchoolResponse>;
    profileTinderu(o: ITinderUProfileRequestBody): Promise<ITinderUResponse>;
    promosValidate(o: IPurchasePromotionsValidateRequest): Promise<IPurchasePromotionsValidateResponse>;
    purchaseAndroid(o: any): Promise<any>;
    tinderuVerify(o: IVerifyRequest): Promise<ITinderUResponse>;
    healthcheckAuth(o: any): Promise<IHealthcheckResponse>;
    challengeVerify(o: IChallengeAnswerVerificationRequest): Promise<any>;
    verificationUnderageState(o: any): Promise<IDataResponse>;
    verificationUnderageUrl(o: any): Promise<IVerificationUrlResponse>;
    boostResult(o: any): Promise<any>;
    consumablesBouncerBypass(o: any): Promise<IBouncerBypassDataResponse>;
    topPicksCategoryDiscovery(o: any): Promise<ICategoryDiscoveryApiResponse>;
    topPicksCategory(o: any): Promise<ICategoryApiResponse>;
    topPicksCategoryPreview(o: any): Promise<ICategoryApiResponse>;
    profileConsents(o: IConsentRequest): Promise<IConsentResponse>;
    connectIncludeIcebreakersMatchPrompts(o: any): Promise<IConnectDataResponse>;
    contacts(o: any): Promise<any>;
    buckets(o: IBucketsRequestBody): Promise<IBucketsResponse>;
    boost(o: IBoostRequest): Promise<any>;
}
export {};
