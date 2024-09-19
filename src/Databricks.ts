import type { Dimension, DateDimension, Attribute, DataSourceInfo } from '@sisense/sdk-data';

import { createAttribute, createDateDimension, createDimension } from '@sisense/sdk-data';

export const DataSource: DataSourceInfo = {
    title: 'Databricks_qa - Elasticube',
    type: 'elasticube',
};

interface landing_page_kpis_daily_mothershipDimension extends Dimension {
    app_apple_signups: Attribute;
    app_downloads: Attribute;
    app_downloads_android: Attribute;
    app_downloads_ios: Attribute;
    app_email_signups: Attribute;
    app_facebook_signups: Attribute;
    applevas_signups: Attribute;
    business_id: Attribute;
    business_name: Attribute;
    business_uuid: Attribute;
    campaign_redemptions: Attribute;
    campaign_redemptions_discount: Attribute;
    campaign_redemptions_receipt_amount: Attribute;
    chatbot_signups: Attribute;
    checkin_earnable_amount: Attribute;
    checkin_earnable_amount_dashboard: Attribute;
    checkin_earnable_amount_kiosk: Attribute;
    checkin_earnable_amount_mobile: Attribute;
    checkin_earnable_amount_null: Attribute;
    checkin_earnable_amount_olo: Attribute;
    checkin_earnable_amount_pos: Attribute;
    checkin_earnable_amount_web: Attribute;
    checkin_receipt_amount: Attribute;
    checkin_receipt_amount_dashboard: Attribute;
    checkin_receipt_amount_kiosk: Attribute;
    checkin_receipt_amount_mobile: Attribute;
    checkin_receipt_amount_null: Attribute;
    checkin_receipt_amount_olo: Attribute;
    checkin_receipt_amount_pos: Attribute;
    checkin_receipt_amount_web: Attribute;
    checkins: Attribute;
    checkins_dashboard: Attribute;
    checkins_kiosk: Attribute;
    checkins_mobile: Attribute;
    checkins_null: Attribute;
    checkins_olo: Attribute;
    checkins_pos: Attribute;
    checkins_web: Attribute;
    coupon_redemptions: Attribute;
    coupon_redemptions_discount: Attribute;
    coupon_redemptions_receipt_amount: Attribute;
    eclub_signups: Attribute;
    etl_updated_ts_utc: Attribute;
    expired_coupon_redemptions: Attribute;
    expired_coupon_redemptions_discount: Attribute;
    expired_coupon_redemptions_receipt_amount: Attribute;
    expired_mass_campaign_revenue: Attribute;
    expired_ongoing_campaign_revenue: Attribute;
    expired_redemptions: Attribute;
    expired_redemptions_discount: Attribute;
    expired_redemptions_receipt_amount: Attribute;
    google_mobile_signups: Attribute;
    google_web_signups: Attribute;
    honored_redemptions: Attribute;
    honored_redemptions_discount: Attribute;
    honored_redemptions_discount_olo: Attribute;
    honored_redemptions_olo: Attribute;
    honored_redemptions_receipt_amount: Attribute;
    honored_redemptions_receipt_amount_olo: Attribute;
    location_id: Attribute;
    loyalty_receipt_amount: Attribute;
    loyalty_receipts: Attribute;
    loyalty_redemptions: Attribute;
    loyalty_redemptions_discount: Attribute;
    loyalty_redemptions_receipt_amount: Attribute;
    mass_campaign_revenue: Attribute;
    null_signups: Attribute;
    ongoing_campaign_revenue: Attribute;
    online_order_signups: Attribute;
    pos_signups: Attribute;
    post_checkin_campaign_revenue: Attribute;
    ratings: Attribute;
    ratings_total: Attribute;
    referrals: Attribute;
    referrals_earnable_amount: Attribute;
    referrals_receipt_amount: Attribute;
    reviews: Attribute;
    signups: Attribute;
    sms_loyalty_signups: Attribute;
    store_number: Attribute;
    time_zone_type: Attribute;
    total_receipt_amount: Attribute;
    total_receipts: Attribute;
    user_coupon_redemptions: Attribute;
    user_coupon_redemptions_discount: Attribute;
    user_coupon_redemptions_receipt_amount: Attribute;
    web_apple_signups: Attribute;
    web_email_signups: Attribute;
    web_facebook_signups: Attribute;
    wifi_portal_eclub_signups: Attribute;
    wifi_portal_loyalty_signups: Attribute;
    wifi_signups: Attribute;
    date: DateDimension;
}
export const landing_page_kpis_daily_mothership = createDimension({
    name: 'landing_page_kpis_daily_mothership',
    app_apple_signups: createAttribute({
        name: 'app_apple_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_apple_signups]',
    }),
    app_downloads: createAttribute({
        name: 'app_downloads',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_downloads]',
    }),
    app_downloads_android: createAttribute({
        name: 'app_downloads_android',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_downloads_android]',
    }),
    app_downloads_ios: createAttribute({
        name: 'app_downloads_ios',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_downloads_ios]',
    }),
    app_email_signups: createAttribute({
        name: 'app_email_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_email_signups]',
    }),
    app_facebook_signups: createAttribute({
        name: 'app_facebook_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.app_facebook_signups]',
    }),
    applevas_signups: createAttribute({
        name: 'applevas_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.applevas_signups]',
    }),
    business_id: createAttribute({
        name: 'business_id',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.business_id]',
    }),
    business_name: createAttribute({
        name: 'business_name',
        type: 'text-attribute',
        expression: '[landing_page_kpis_daily_mothership.business_name]',
    }),
    business_uuid: createAttribute({
        name: 'business_uuid',
        type: 'text-attribute',
        expression: '[landing_page_kpis_daily_mothership.business_uuid]',
    }),
    campaign_redemptions: createAttribute({
        name: 'campaign_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.campaign_redemptions]',
    }),
    campaign_redemptions_discount: createAttribute({
        name: 'campaign_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.campaign_redemptions_discount]',
    }),
    campaign_redemptions_receipt_amount: createAttribute({
        name: 'campaign_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.campaign_redemptions_receipt_amount]',
    }),
    chatbot_signups: createAttribute({
        name: 'chatbot_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.chatbot_signups]',
    }),
    checkin_earnable_amount: createAttribute({
        name: 'checkin_earnable_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount]',
    }),
    checkin_earnable_amount_dashboard: createAttribute({
        name: 'checkin_earnable_amount_dashboard',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_dashboard]',
    }),
    checkin_earnable_amount_kiosk: createAttribute({
        name: 'checkin_earnable_amount_kiosk',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_kiosk]',
    }),
    checkin_earnable_amount_mobile: createAttribute({
        name: 'checkin_earnable_amount_mobile',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_mobile]',
    }),
    checkin_earnable_amount_null: createAttribute({
        name: 'checkin_earnable_amount_null',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_null]',
    }),
    checkin_earnable_amount_olo: createAttribute({
        name: 'checkin_earnable_amount_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_olo]',
    }),
    checkin_earnable_amount_pos: createAttribute({
        name: 'checkin_earnable_amount_pos',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_pos]',
    }),
    checkin_earnable_amount_web: createAttribute({
        name: 'checkin_earnable_amount_web',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_earnable_amount_web]',
    }),
    checkin_receipt_amount: createAttribute({
        name: 'checkin_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount]',
    }),
    checkin_receipt_amount_dashboard: createAttribute({
        name: 'checkin_receipt_amount_dashboard',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_dashboard]',
    }),
    checkin_receipt_amount_kiosk: createAttribute({
        name: 'checkin_receipt_amount_kiosk',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_kiosk]',
    }),
    checkin_receipt_amount_mobile: createAttribute({
        name: 'checkin_receipt_amount_mobile',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_mobile]',
    }),
    checkin_receipt_amount_null: createAttribute({
        name: 'checkin_receipt_amount_null',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_null]',
    }),
    checkin_receipt_amount_olo: createAttribute({
        name: 'checkin_receipt_amount_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_olo]',
    }),
    checkin_receipt_amount_pos: createAttribute({
        name: 'checkin_receipt_amount_pos',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_pos]',
    }),
    checkin_receipt_amount_web: createAttribute({
        name: 'checkin_receipt_amount_web',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkin_receipt_amount_web]',
    }),
    checkins: createAttribute({
        name: 'checkins',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins]',
    }),
    checkins_dashboard: createAttribute({
        name: 'checkins_dashboard',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_dashboard]',
    }),
    checkins_kiosk: createAttribute({
        name: 'checkins_kiosk',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_kiosk]',
    }),
    checkins_mobile: createAttribute({
        name: 'checkins_mobile',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_mobile]',
    }),
    checkins_null: createAttribute({
        name: 'checkins_null',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_null]',
    }),
    checkins_olo: createAttribute({
        name: 'checkins_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_olo]',
    }),
    checkins_pos: createAttribute({
        name: 'checkins_pos',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_pos]',
    }),
    checkins_web: createAttribute({
        name: 'checkins_web',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.checkins_web]',
    }),
    coupon_redemptions: createAttribute({
        name: 'coupon_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.coupon_redemptions]',
    }),
    coupon_redemptions_discount: createAttribute({
        name: 'coupon_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.coupon_redemptions_discount]',
    }),
    coupon_redemptions_receipt_amount: createAttribute({
        name: 'coupon_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.coupon_redemptions_receipt_amount]',
    }),
    eclub_signups: createAttribute({
        name: 'eclub_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.eclub_signups]',
    }),
    etl_updated_ts_utc: createAttribute({
        name: 'etl_updated_ts_utc',
        type: 'text-attribute',
        expression: '[landing_page_kpis_daily_mothership.etl_updated_ts_utc]',
    }),
    expired_coupon_redemptions: createAttribute({
        name: 'expired_coupon_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_coupon_redemptions]',
    }),
    expired_coupon_redemptions_discount: createAttribute({
        name: 'expired_coupon_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_coupon_redemptions_discount]',
    }),
    expired_coupon_redemptions_receipt_amount: createAttribute({
        name: 'expired_coupon_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression:
            '[landing_page_kpis_daily_mothership.expired_coupon_redemptions_receipt_amount]',
    }),
    expired_mass_campaign_revenue: createAttribute({
        name: 'expired_mass_campaign_revenue',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_mass_campaign_revenue]',
    }),
    expired_ongoing_campaign_revenue: createAttribute({
        name: 'expired_ongoing_campaign_revenue',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_ongoing_campaign_revenue]',
    }),
    expired_redemptions: createAttribute({
        name: 'expired_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_redemptions]',
    }),
    expired_redemptions_discount: createAttribute({
        name: 'expired_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_redemptions_discount]',
    }),
    expired_redemptions_receipt_amount: createAttribute({
        name: 'expired_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.expired_redemptions_receipt_amount]',
    }),
    google_mobile_signups: createAttribute({
        name: 'google_mobile_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.google_mobile_signups]',
    }),
    google_web_signups: createAttribute({
        name: 'google_web_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.google_web_signups]',
    }),
    honored_redemptions: createAttribute({
        name: 'honored_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions]',
    }),
    honored_redemptions_discount: createAttribute({
        name: 'honored_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions_discount]',
    }),
    honored_redemptions_discount_olo: createAttribute({
        name: 'honored_redemptions_discount_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions_discount_olo]',
    }),
    honored_redemptions_olo: createAttribute({
        name: 'honored_redemptions_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions_olo]',
    }),
    honored_redemptions_receipt_amount: createAttribute({
        name: 'honored_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions_receipt_amount]',
    }),
    honored_redemptions_receipt_amount_olo: createAttribute({
        name: 'honored_redemptions_receipt_amount_olo',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.honored_redemptions_receipt_amount_olo]',
    }),
    location_id: createAttribute({
        name: 'location_id',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.location_id]',
    }),
    loyalty_receipt_amount: createAttribute({
        name: 'loyalty_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.loyalty_receipt_amount]',
    }),
    loyalty_receipts: createAttribute({
        name: 'loyalty_receipts',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.loyalty_receipts]',
    }),
    loyalty_redemptions: createAttribute({
        name: 'loyalty_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.loyalty_redemptions]',
    }),
    loyalty_redemptions_discount: createAttribute({
        name: 'loyalty_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.loyalty_redemptions_discount]',
    }),
    loyalty_redemptions_receipt_amount: createAttribute({
        name: 'loyalty_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.loyalty_redemptions_receipt_amount]',
    }),
    mass_campaign_revenue: createAttribute({
        name: 'mass_campaign_revenue',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.mass_campaign_revenue]',
    }),
    null_signups: createAttribute({
        name: 'null_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.null_signups]',
    }),
    ongoing_campaign_revenue: createAttribute({
        name: 'ongoing_campaign_revenue',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.ongoing_campaign_revenue]',
    }),
    online_order_signups: createAttribute({
        name: 'online_order_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.online_order_signups]',
    }),
    pos_signups: createAttribute({
        name: 'pos_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.pos_signups]',
    }),
    post_checkin_campaign_revenue: createAttribute({
        name: 'post_checkin_campaign_revenue',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.post_checkin_campaign_revenue]',
    }),
    ratings: createAttribute({
        name: 'ratings',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.ratings]',
    }),
    ratings_total: createAttribute({
        name: 'ratings_total',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.ratings_total]',
    }),
    referrals: createAttribute({
        name: 'referrals',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.referrals]',
    }),
    referrals_earnable_amount: createAttribute({
        name: 'referrals_earnable_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.referrals_earnable_amount]',
    }),
    referrals_receipt_amount: createAttribute({
        name: 'referrals_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.referrals_receipt_amount]',
    }),
    reviews: createAttribute({
        name: 'reviews',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.reviews]',
    }),
    signups: createAttribute({
        name: 'signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.signups]',
    }),
    sms_loyalty_signups: createAttribute({
        name: 'sms_loyalty_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.sms_loyalty_signups]',
    }),
    store_number: createAttribute({
        name: 'store_number',
        type: 'text-attribute',
        expression: '[landing_page_kpis_daily_mothership.store_number]',
    }),
    time_zone_type: createAttribute({
        name: 'time_zone_type',
        type: 'text-attribute',
        expression: '[landing_page_kpis_daily_mothership.time_zone_type]',
    }),
    total_receipt_amount: createAttribute({
        name: 'total_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.total_receipt_amount]',
    }),
    total_receipts: createAttribute({
        name: 'total_receipts',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.total_receipts]',
    }),
    user_coupon_redemptions: createAttribute({
        name: 'user_coupon_redemptions',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.user_coupon_redemptions]',
    }),
    user_coupon_redemptions_discount: createAttribute({
        name: 'user_coupon_redemptions_discount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.user_coupon_redemptions_discount]',
    }),
    user_coupon_redemptions_receipt_amount: createAttribute({
        name: 'user_coupon_redemptions_receipt_amount',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.user_coupon_redemptions_receipt_amount]',
    }),
    web_apple_signups: createAttribute({
        name: 'web_apple_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.web_apple_signups]',
    }),
    web_email_signups: createAttribute({
        name: 'web_email_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.web_email_signups]',
    }),
    web_facebook_signups: createAttribute({
        name: 'web_facebook_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.web_facebook_signups]',
    }),
    wifi_portal_eclub_signups: createAttribute({
        name: 'wifi_portal_eclub_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.wifi_portal_eclub_signups]',
    }),
    wifi_portal_loyalty_signups: createAttribute({
        name: 'wifi_portal_loyalty_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.wifi_portal_loyalty_signups]',
    }),
    wifi_signups: createAttribute({
        name: 'wifi_signups',
        type: 'numeric-attribute',
        expression: '[landing_page_kpis_daily_mothership.wifi_signups]',
    }),
    date: createDateDimension({
        name: 'date',
        expression: '[landing_page_kpis_daily_mothership.date (Calendar)]',
    }),
}) as landing_page_kpis_daily_mothershipDimension;

interface redemption_codesDimension extends Dimension {
    __deleted: Attribute;
    business_id: Attribute;
    discount: Attribute;
    employee_id: Attribute;
    redemption_codesid: Attribute;
    kafkakey: Attribute;
    kafkaoffset: Attribute;
    location_id: Attribute;
    op: Attribute;
    receipt_amount: Attribute;
    receipt_datetime: Attribute;
    redeemable_id: Attribute;
    redeemed_menu_items: Attribute;
    redemption_token: Attribute;
    status: Attribute;
    subtotal_amount: Attribute;
    transaction_no: Attribute;
    bronze_current_timestamp: DateDimension;
    created_at: DateDimension;
    kafkatimestamp: DateDimension;
    mysql_timestamp: DateDimension;
    processed_at: DateDimension;
    raw_current_timestamp: DateDimension;
    updated_at: DateDimension;
}
export const redemption_codes = createDimension({
    name: 'redemption_codes',
    __deleted: createAttribute({
        name: '__deleted',
        type: 'text-attribute',
        expression: '[redemption_codes.__deleted]',
    }),
    business_id: createAttribute({
        name: 'business_id',
        type: 'numeric-attribute',
        expression: '[redemption_codes.business_id]',
    }),
    discount: createAttribute({
        name: 'discount',
        type: 'numeric-attribute',
        expression: '[redemption_codes.discount]',
    }),
    employee_id: createAttribute({
        name: 'employee_id',
        type: 'text-attribute',
        expression: '[redemption_codes.employee_id]',
    }),
    redemption_codesid: createAttribute({
        name: '[redemption_codes.id]',
        type: 'numeric-attribute',
        expression: '[redemption_codes.id]',
    }),
    kafkakey: createAttribute({
        name: 'kafkakey',
        type: 'text-attribute',
        expression: '[redemption_codes.kafkakey]',
    }),
    kafkaoffset: createAttribute({
        name: 'kafkaoffset',
        type: 'numeric-attribute',
        expression: '[redemption_codes.kafkaoffset]',
    }),
    location_id: createAttribute({
        name: 'location_id',
        type: 'numeric-attribute',
        expression: '[redemption_codes.location_id]',
    }),
    op: createAttribute({
        name: 'op',
        type: 'text-attribute',
        expression: '[redemption_codes.op]',
    }),
    receipt_amount: createAttribute({
        name: 'receipt_amount',
        type: 'numeric-attribute',
        expression: '[redemption_codes.receipt_amount]',
    }),
    receipt_datetime: createAttribute({
        name: 'receipt_datetime',
        type: 'text-attribute',
        expression: '[redemption_codes.receipt_datetime]',
    }),
    redeemable_id: createAttribute({
        name: 'redeemable_id',
        type: 'numeric-attribute',
        expression: '[redemption_codes.redeemable_id]',
    }),
    redeemed_menu_items: createAttribute({
        name: 'redeemed_menu_items',
        type: 'text-attribute',
        expression: '[redemption_codes.redeemed_menu_items]',
    }),
    redemption_token: createAttribute({
        name: 'redemption_token',
        type: 'text-attribute',
        expression: '[redemption_codes.redemption_token]',
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[redemption_codes.status]',
    }),
    subtotal_amount: createAttribute({
        name: 'subtotal_amount',
        type: 'numeric-attribute',
        expression: '[redemption_codes.subtotal_amount]',
    }),
    transaction_no: createAttribute({
        name: 'transaction_no',
        type: 'text-attribute',
        expression: '[redemption_codes.transaction_no]',
    }),
    bronze_current_timestamp: createDateDimension({
        name: 'bronze_current_timestamp',
        expression: '[redemption_codes.bronze_current_timestamp (Calendar)]',
    }),
    created_at: createDateDimension({
        name: 'created_at',
        expression: '[redemption_codes.created_at (Calendar)]',
    }),
    kafkatimestamp: createDateDimension({
        name: 'kafkatimestamp',
        expression: '[redemption_codes.kafkatimestamp (Calendar)]',
    }),
    mysql_timestamp: createDateDimension({
        name: 'mysql_timestamp',
        expression: '[redemption_codes.mysql_timestamp (Calendar)]',
    }),
    processed_at: createDateDimension({
        name: 'processed_at',
        expression: '[redemption_codes.processed_at (Calendar)]',
    }),
    raw_current_timestamp: createDateDimension({
        name: 'raw_current_timestamp',
        expression: '[redemption_codes.raw_current_timestamp (Calendar)]',
    }),
    updated_at: createDateDimension({
        name: 'updated_at',
        expression: '[redemption_codes.updated_at (Calendar)]',
    }),
}) as redemption_codesDimension;

interface redemptionsDimension extends Dimension {
    __deleted: Attribute;
    additional_properties: Attribute;
    admin_id: Attribute;
    bar_code: Attribute;
    business_id: Attribute;
    channel: Attribute;
    checkins_count: Attribute;
    force_message: Attribute;
    gift_count: Attribute;
    gps_accuracy: Attribute;
    redemptionsid: Attribute;
    internal_tracking_code: Attribute;
    ip_address: Attribute;
    kafkakey: Attribute;
    kafkaoffset: Attribute;
    latitude: Attribute;
    location_id: Attribute;
    longitude: Attribute;
    loyalty_count: Attribute;
    op: Attribute;
    points_requested: Attribute;
    redeemable_id: Attribute;
    redeemed_points: Attribute;
    redemption_code_id: Attribute;
    referral_count: Attribute;
    reward_id: Attribute;
    status: Attribute;
    transferred_to_id: Attribute;
    transferred_to_type: Attribute;
    redemptionstype: Attribute;
    user_agent: Attribute;
    user_id: Attribute;
    web: Attribute;
    bronze_current_timestamp: DateDimension;
    created_at: DateDimension;
    expired_at: DateDimension;
    expiring_on: DateDimension;
    kafkatimestamp: DateDimension;
    mysql_timestamp: DateDimension;
    raw_current_timestamp: DateDimension;
    updated_at: DateDimension;
}
export const redemptions = createDimension({
    name: 'redemptions',
    __deleted: createAttribute({
        name: '__deleted',
        type: 'text-attribute',
        expression: '[redemptions.__deleted]',
    }),
    additional_properties: createAttribute({
        name: 'additional_properties',
        type: 'text-attribute',
        expression: '[redemptions.additional_properties]',
    }),
    admin_id: createAttribute({
        name: 'admin_id',
        type: 'numeric-attribute',
        expression: '[redemptions.admin_id]',
    }),
    bar_code: createAttribute({
        name: 'bar_code',
        type: 'text-attribute',
        expression: '[redemptions.bar_code]',
    }),
    business_id: createAttribute({
        name: 'business_id',
        type: 'numeric-attribute',
        expression: '[redemptions.business_id]',
    }),
    channel: createAttribute({
        name: 'channel',
        type: 'text-attribute',
        expression: '[redemptions.channel]',
    }),
    checkins_count: createAttribute({
        name: 'checkins_count',
        type: 'numeric-attribute',
        expression: '[redemptions.checkins_count]',
    }),
    force_message: createAttribute({
        name: 'force_message',
        type: 'text-attribute',
        expression: '[redemptions.force_message]',
    }),
    gift_count: createAttribute({
        name: 'gift_count',
        type: 'numeric-attribute',
        expression: '[redemptions.gift_count]',
    }),
    gps_accuracy: createAttribute({
        name: 'gps_accuracy',
        type: 'numeric-attribute',
        expression: '[redemptions.gps_accuracy]',
    }),
    redemptionsid: createAttribute({
        name: '[redemptions.id]',
        type: 'numeric-attribute',
        expression: '[redemptions.id]',
    }),
    internal_tracking_code: createAttribute({
        name: 'internal_tracking_code',
        type: 'text-attribute',
        expression: '[redemptions.internal_tracking_code]',
    }),
    ip_address: createAttribute({
        name: 'ip_address',
        type: 'text-attribute',
        expression: '[redemptions.ip_address]',
    }),
    kafkakey: createAttribute({
        name: 'kafkakey',
        type: 'text-attribute',
        expression: '[redemptions.kafkakey]',
    }),
    kafkaoffset: createAttribute({
        name: 'kafkaoffset',
        type: 'numeric-attribute',
        expression: '[redemptions.kafkaoffset]',
    }),
    latitude: createAttribute({
        name: 'latitude',
        type: 'text-attribute',
        expression: '[redemptions.latitude]',
    }),
    location_id: createAttribute({
        name: 'location_id',
        type: 'numeric-attribute',
        expression: '[redemptions.location_id]',
    }),
    longitude: createAttribute({
        name: 'longitude',
        type: 'text-attribute',
        expression: '[redemptions.longitude]',
    }),
    loyalty_count: createAttribute({
        name: 'loyalty_count',
        type: 'numeric-attribute',
        expression: '[redemptions.loyalty_count]',
    }),
    op: createAttribute({
        name: 'op',
        type: 'text-attribute',
        expression: '[redemptions.op]',
    }),
    points_requested: createAttribute({
        name: 'points_requested',
        type: 'numeric-attribute',
        expression: '[redemptions.points_requested]',
    }),
    redeemable_id: createAttribute({
        name: 'redeemable_id',
        type: 'numeric-attribute',
        expression: '[redemptions.redeemable_id]',
    }),
    redeemed_points: createAttribute({
        name: 'redeemed_points',
        type: 'numeric-attribute',
        expression: '[redemptions.redeemed_points]',
    }),
    redemption_code_id: createAttribute({
        name: 'redemption_code_id',
        type: 'numeric-attribute',
        expression: '[redemptions.redemption_code_id]',
    }),
    referral_count: createAttribute({
        name: 'referral_count',
        type: 'numeric-attribute',
        expression: '[redemptions.referral_count]',
    }),
    reward_id: createAttribute({
        name: 'reward_id',
        type: 'numeric-attribute',
        expression: '[redemptions.reward_id]',
    }),
    status: createAttribute({
        name: 'status',
        type: 'text-attribute',
        expression: '[redemptions.status]',
    }),
    transferred_to_id: createAttribute({
        name: 'transferred_to_id',
        type: 'numeric-attribute',
        expression: '[redemptions.transferred_to_id]',
    }),
    transferred_to_type: createAttribute({
        name: 'transferred_to_type',
        type: 'text-attribute',
        expression: '[redemptions.transferred_to_type]',
    }),
    redemptionstype: createAttribute({
        name: '[redemptions.type]',
        type: 'text-attribute',
        expression: '[redemptions.type]',
    }),
    user_agent: createAttribute({
        name: 'user_agent',
        type: 'text-attribute',
        expression: '[redemptions.user_agent]',
    }),
    user_id: createAttribute({
        name: 'user_id',
        type: 'numeric-attribute',
        expression: '[redemptions.user_id]',
    }),
    web: createAttribute({
        name: 'web',
        type: 'numeric-attribute',
        expression: '[redemptions.web]',
    }),
    bronze_current_timestamp: createDateDimension({
        name: 'bronze_current_timestamp',
        expression: '[redemptions.bronze_current_timestamp (Calendar)]',
    }),
    created_at: createDateDimension({
        name: 'created_at',
        expression: '[redemptions.created_at (Calendar)]',
    }),
    expired_at: createDateDimension({
        name: 'expired_at',
        expression: '[redemptions.expired_at (Calendar)]',
    }),
    expiring_on: createDateDimension({
        name: 'expiring_on',
        expression: '[redemptions.expiring_on (Calendar)]',
    }),
    kafkatimestamp: createDateDimension({
        name: 'kafkatimestamp',
        expression: '[redemptions.kafkatimestamp (Calendar)]',
    }),
    mysql_timestamp: createDateDimension({
        name: 'mysql_timestamp',
        expression: '[redemptions.mysql_timestamp (Calendar)]',
    }),
    raw_current_timestamp: createDateDimension({
        name: 'raw_current_timestamp',
        expression: '[redemptions.raw_current_timestamp (Calendar)]',
    }),
    updated_at: createDateDimension({
        name: 'updated_at',
        expression: '[redemptions.updated_at (Calendar)]',
    }),
}) as redemptionsDimension;
