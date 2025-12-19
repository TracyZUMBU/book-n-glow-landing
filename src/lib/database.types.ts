export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      booking_events: {
        Row: {
          booking_id: number
          created_at: string | null
          event_type: string
          id: number
        }
        Insert: {
          booking_id: number
          created_at?: string | null
          event_type: string
          id?: number
        }
        Update: {
          booking_id?: number
          created_at?: string | null
          event_type?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "booking_events_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_selected_options: {
        Row: {
          additional_duration: number
          additional_price: number
          booking_id: number
          created_at: string
          id: number
          name: string
          service_option_id: number | null
        }
        Insert: {
          additional_duration?: number
          additional_price?: number
          booking_id: number
          created_at?: string
          id?: number
          name: string
          service_option_id?: number | null
        }
        Update: {
          additional_duration?: number
          additional_price?: number
          booking_id?: number
          created_at?: string
          id?: number
          name?: string
          service_option_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_selected_options_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_selected_options_service_option_id_fkey"
            columns: ["service_option_id"]
            isOneToOne: false
            referencedRelation: "service_options"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          booking_datetime: string
          booking_end_datetime: string
          cancellation_deadline_at: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completed_at: string | null
          confirmation_deadline_at: string | null
          created_at: string
          customer_id: string
          deposit_amount_due: number | null
          id: number
          message: string | null
          options_duration: number
          options_price: number
          paid_at: string | null
          payment_method: string
          payment_status: string
          provider_id: string
          service_duration: number
          service_id: number
          service_price: number
          status: string
          stripe_payment_intent_id: string | null
          total_duration: number
          total_price: number
          transaction_paypal_id: string | null
          transferred_at: string | null
          version: number
        }
        Insert: {
          booking_datetime: string
          booking_end_datetime: string
          cancellation_deadline_at?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          confirmation_deadline_at?: string | null
          created_at?: string
          customer_id: string
          deposit_amount_due?: number | null
          id?: never
          message?: string | null
          options_duration?: number
          options_price?: number
          paid_at?: string | null
          payment_method: string
          payment_status?: string
          provider_id: string
          service_duration?: number
          service_id: number
          service_price?: number
          status?: string
          stripe_payment_intent_id?: string | null
          total_duration?: number
          total_price?: number
          transaction_paypal_id?: string | null
          transferred_at?: string | null
          version?: number
        }
        Update: {
          booking_datetime?: string
          booking_end_datetime?: string
          cancellation_deadline_at?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completed_at?: string | null
          confirmation_deadline_at?: string | null
          created_at?: string
          customer_id?: string
          deposit_amount_due?: number | null
          id?: never
          message?: string | null
          options_duration?: number
          options_price?: number
          paid_at?: string | null
          payment_method?: string
          payment_status?: string
          provider_id?: string
          service_duration?: number
          service_id?: number
          service_price?: number
          status?: string
          stripe_payment_intent_id?: string | null
          total_duration?: number
          total_price?: number
          transaction_paypal_id?: string | null
          transferred_at?: string | null
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers_with_email"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      cron_log: {
        Row: {
          id: number
          message: string | null
          ran_at: string | null
        }
        Insert: {
          id?: number
          message?: string | null
          ran_at?: string | null
        }
        Update: {
          id?: number
          message?: string | null
          ran_at?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          created_at: string
          first_name: string
          id: string
          last_name: string
          name: string | null
          paypal_account_name: string | null
          phone: string | null
          phone_verified: boolean
        }
        Insert: {
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          name?: string | null
          paypal_account_name?: string | null
          phone?: string | null
          phone_verified?: boolean
        }
        Update: {
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          name?: string | null
          paypal_account_name?: string | null
          phone?: string | null
          phone_verified?: boolean
        }
        Relationships: []
      }
      notifications_to_send: {
        Row: {
          booking_id: number
          channel: string
          created_at: string | null
          error_message: string | null
          event_type: string
          id: number
          payload: Json
          recipient_type: string | null
          retry_count: number
          status: string
          updated_at: string | null
        }
        Insert: {
          booking_id: number
          channel?: string
          created_at?: string | null
          error_message?: string | null
          event_type: string
          id?: number
          payload: Json
          recipient_type?: string | null
          retry_count?: number
          status?: string
          updated_at?: string | null
        }
        Update: {
          booking_id?: number
          channel?: string
          created_at?: string | null
          error_message?: string | null
          event_type?: string
          id?: number
          payload?: Json
          recipient_type?: string | null
          retry_count?: number
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      phone_verifications: {
        Row: {
          attempts_count: number
          code_hash: string
          created_at: string | null
          customer_id: string | null
          expires_at: string
          id: number
          phone: string
          verified: boolean | null
          verified_at: string | null
        }
        Insert: {
          attempts_count?: number
          code_hash: string
          created_at?: string | null
          customer_id?: string | null
          expires_at: string
          id?: number
          phone: string
          verified?: boolean | null
          verified_at?: string | null
        }
        Update: {
          attempts_count?: number
          code_hash?: string
          created_at?: string | null
          customer_id?: string | null
          expires_at?: string
          id?: number
          phone?: string
          verified?: boolean | null
          verified_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_verifications_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "phone_verifications_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers_with_email"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_opening_hours: {
        Row: {
          created_at: string
          end_min: number | null
          end_time: string
          id: string
          provider_id: string
          start_min: number | null
          start_time: string
          weekday: number
        }
        Insert: {
          created_at?: string
          end_min?: number | null
          end_time: string
          id?: string
          provider_id: string
          start_min?: number | null
          start_time: string
          weekday: number
        }
        Update: {
          created_at?: string
          end_min?: number | null
          end_time?: string
          id?: string
          provider_id?: string
          start_min?: number | null
          start_time?: string
          weekday?: number
        }
        Relationships: [
          {
            foreignKeyName: "provider_opening_hours_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "provider_opening_hours_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
        ]
      }
      provider_unavailabilities: {
        Row: {
          created_at: string
          end_datetime: string
          id: string
          provider_id: string
          start_datetime: string
        }
        Insert: {
          created_at?: string
          end_datetime: string
          id?: string
          provider_id: string
          start_datetime: string
        }
        Update: {
          created_at?: string
          end_datetime?: string
          id?: string
          provider_id?: string
          start_datetime?: string
        }
        Relationships: [
          {
            foreignKeyName: "provider_unavailabilities_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "provider_unavailabilities_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
        ]
      }
      providers: {
        Row: {
          allow_cancellation: boolean
          bio: string | null
          cancellation_deadline_hours: number | null
          charges_enabled: boolean | null
          city: string
          company_name: string
          contact_method: string
          country: string
          cover_image_url: string | null
          created_at: string
          customer_confirmation_deadline_hours: number | null
          deposit_amount: number | null
          deposit_required: boolean
          deposit_type: string | null
          email: string | null
          first_name: string
          id: string
          instagram_name: string
          interval_slot: number
          is_address_public: boolean
          is_demo: boolean
          last_name: string
          margin_minutes: number | null
          max_booking_months_in_advance: number | null
          onboarding_status: string
          payment_method: string
          payouts_enabled: boolean | null
          paypal_account: string | null
          postal_code: string
          profile_image_url: string | null
          requires_customer_confirmation: boolean
          rules: string | null
          same_day_booking_deadline_hours: number | null
          slug: string
          street: string
          stripe_account_status: string | null
          stripe_connected_account_id: string | null
        }
        Insert: {
          allow_cancellation?: boolean
          bio?: string | null
          cancellation_deadline_hours?: number | null
          charges_enabled?: boolean | null
          city: string
          company_name: string
          contact_method?: string
          country: string
          cover_image_url?: string | null
          created_at?: string
          customer_confirmation_deadline_hours?: number | null
          deposit_amount?: number | null
          deposit_required?: boolean
          deposit_type?: string | null
          email?: string | null
          first_name?: string
          id: string
          instagram_name: string
          interval_slot: number
          is_address_public?: boolean
          is_demo?: boolean
          last_name?: string
          margin_minutes?: number | null
          max_booking_months_in_advance?: number | null
          onboarding_status?: string
          payment_method?: string
          payouts_enabled?: boolean | null
          paypal_account?: string | null
          postal_code: string
          profile_image_url?: string | null
          requires_customer_confirmation?: boolean
          rules?: string | null
          same_day_booking_deadline_hours?: number | null
          slug: string
          street: string
          stripe_account_status?: string | null
          stripe_connected_account_id?: string | null
        }
        Update: {
          allow_cancellation?: boolean
          bio?: string | null
          cancellation_deadline_hours?: number | null
          charges_enabled?: boolean | null
          city?: string
          company_name?: string
          contact_method?: string
          country?: string
          cover_image_url?: string | null
          created_at?: string
          customer_confirmation_deadline_hours?: number | null
          deposit_amount?: number | null
          deposit_required?: boolean
          deposit_type?: string | null
          email?: string | null
          first_name?: string
          id?: string
          instagram_name?: string
          interval_slot?: number
          is_address_public?: boolean
          is_demo?: boolean
          last_name?: string
          margin_minutes?: number | null
          max_booking_months_in_advance?: number | null
          onboarding_status?: string
          payment_method?: string
          payouts_enabled?: boolean | null
          paypal_account?: string | null
          postal_code?: string
          profile_image_url?: string | null
          requires_customer_confirmation?: boolean
          rules?: string | null
          same_day_booking_deadline_hours?: number | null
          slug?: string
          street?: string
          stripe_account_status?: string | null
          stripe_connected_account_id?: string | null
        }
        Relationships: []
      }
      service_options: {
        Row: {
          additional_duration: number
          additional_price: number
          id: number
          is_mandatory: boolean
          name: string
          provider_id: string
          service_id: number
        }
        Insert: {
          additional_duration?: number
          additional_price?: number
          id?: number
          is_mandatory?: boolean
          name: string
          provider_id?: string
          service_id: number
        }
        Update: {
          additional_duration?: number
          additional_price?: number
          id?: number
          is_mandatory?: boolean
          name?: string
          provider_id?: string
          service_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "service_options_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_options_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_options_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          category_id: number | null
          created_at: string
          description: string | null
          duration: number
          id: number
          instructions: string | null
          is_archived: boolean
          name: string
          price: number
          provider_id: string
        }
        Insert: {
          category_id?: number | null
          created_at: string
          description?: string | null
          duration: number
          id?: number
          instructions?: string | null
          is_archived?: boolean
          name: string
          price: number
          provider_id: string
        }
        Update: {
          category_id?: number | null
          created_at?: string
          description?: string | null
          duration?: number
          id?: number
          instructions?: string | null
          is_archived?: boolean
          name?: string
          price?: number
          provider_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "services_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "services_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: false
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_subscriptions: {
        Row: {
          amount: number | null
          cancel_at: string | null
          canceled_at: string | null
          created_at: string | null
          currency: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan: string | null
          provider_id: string
          status: string | null
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_product_id: string | null
          stripe_subscription_id: string | null
          trial_end: string | null
          trial_start: string | null
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          cancel_at?: string | null
          canceled_at?: string | null
          created_at?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string | null
          provider_id: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          cancel_at?: string | null
          canceled_at?: string | null
          created_at?: string | null
          currency?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string | null
          provider_id?: string
          status?: string | null
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          stripe_subscription_id?: string | null
          trial_end?: string | null
          trial_start?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "stripe_subscriptions_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: true
            referencedRelation: "providers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "stripe_subscriptions_provider_id_fkey"
            columns: ["provider_id"]
            isOneToOne: true
            referencedRelation: "providers_with_phone"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      customers_with_email: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string | null
          last_name: string | null
          name: string | null
          paypal_account_name: string | null
          phone: string | null
          phone_verified: boolean | null
        }
        Relationships: []
      }
      providers_with_phone: {
        Row: {
          allow_cancellation: boolean | null
          bio: string | null
          cancellation_deadline_hours: number | null
          city: string | null
          company_name: string | null
          contact_method: string | null
          country: string | null
          cover_image_url: string | null
          created_at: string | null
          customer_confirmation_deadline_hours: number | null
          deposit_amount: number | null
          deposit_required: boolean | null
          deposit_type: string | null
          email: string | null
          first_name: string | null
          id: string | null
          instagram_name: string | null
          interval_slot: number | null
          is_address_public: boolean | null
          is_demo: boolean | null
          last_name: string | null
          margin_minutes: number | null
          max_booking_months_in_advance: number | null
          onboarding_status: string | null
          payment_method: string | null
          paypal_account: string | null
          phone: string | null
          postal_code: string | null
          profile_image_url: string | null
          requires_customer_confirmation: boolean | null
          rules: string | null
          same_day_booking_deadline_hours: number | null
          slug: string | null
          street: string | null
          stripe_account_status: string | null
          stripe_connected_account_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      archive_or_delete_service: {
        Args: { input_service_id: number }
        Returns: string
      }
      cancel_failed_stripe_card_bookings: { Args: never; Returns: undefined }
      cancel_unconfirmed_bookings: { Args: never; Returns: undefined }
      cancel_unpaid_pending_payment_bookings: {
        Args: never
        Returns: undefined
      }
      check_provider_availability: {
        Args: {
          p_end_datetime: string
          p_provider_id: string
          p_start_datetime: string
        }
        Returns: boolean
      }
      create_booking_with_margin:
        | {
            Args: {
              p_client_id: number
              p_customer_email: string
              p_customer_name: string
              p_customer_phone: string
              p_deposit_amount_due: number
              p_margin_minutes: number
              p_message: string
              p_payment_method: string
              p_provider_id: number
              p_service_id: number
              p_start_datetime: string
              p_status: string
              p_transaction_paypal_id: string
            }
            Returns: number
          }
        | {
            Args: {
              p_client_id: string
              p_customer_name: string
              p_customer_phone: string
              p_deposit_amount_paid: number
              p_margin_minutes: number
              p_message: string
              p_payment_method: string
              p_provider_id: string
              p_service_id: number
              p_start_datetime: string
              p_status: string
              p_transaction_paypal_id: string
            }
            Returns: number
          }
      create_booking_with_options_atomic: {
        Args: {
          p_booking_datetime: string
          p_booking_end_datetime: string
          p_cancellation_deadline_at?: string
          p_cancelled_at?: string
          p_cancelled_by?: string
          p_completed_at?: string
          p_confirmation_deadline_at?: string
          p_created_at: string
          p_customer_id: string
          p_deposit_amount_due?: number
          p_message?: string
          p_options?: Json
          p_options_duration: number
          p_options_price: number
          p_paid_at?: string
          p_payment_method: string
          p_payment_status?: string
          p_provider_id: string
          p_service_duration: number
          p_service_id: number
          p_service_price: number
          p_status: string
          p_stripe_payment_intent_id?: string
          p_transaction_paypal_id?: string
          p_transferred_at?: string
          p_version: number
        }
        Returns: number
      }
      create_client_anonymous: {
        Args: { p_email: string; p_name: string; p_phone: string }
        Returns: {
          created_at: string
          first_name: string
          id: string
          last_name: string
          name: string | null
          paypal_account_name: string | null
          phone: string | null
          phone_verified: boolean
        }
        SetofOptions: {
          from: "*"
          to: "customers"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      debug_create_booking: {
        Args: {
          p_client_id: string
          p_customer_email: string
          p_customer_name: string
          p_customer_phone: string
          p_deposit_amount_paid: number
          p_margin_minutes: number
          p_message: string
          p_payment_method: string
          p_provider_id: number
          p_service_id: number
          p_start_datetime: string
          p_status: string
          p_transaction_paypal_id: string
        }
        Returns: number
      }
      get_available_slots: {
        Args: {
          p_provider_id: string
          p_service_id: number
          p_start_date: string
        }
        Returns: Json
      }
      get_available_slots_v2: {
        Args: {
          p_provider_id: string
          p_service_duration_min: number
          p_start_date: string
        }
        Returns: Json
      }
      get_booking_with_privacy: {
        Args: { p_booking_id: number }
        Returns: Json
      }
      increment_verification_attempt: {
        Args: { client_id_input: string }
        Returns: number
      }
      provider_opening_range: {
        Args: { input_provider_id: string }
        Returns: {
          earliest_start: string
          latest_end: string
        }[]
      }
      search_bookings: {
        Args: { input_provider_id: string; query: string }
        Returns: {
          booking_datetime: string
          created_at: string
          customer_email: string
          customer_email_full: string
          customer_first_name: string
          customer_id: string
          customer_last_name: string
          customer_name: string
          customer_phone: string
          id: number
          provider_cancellation_deadline_hours: number
          provider_company_name: string
          provider_id: string
          provider_method_contact: string
          provider_method_payment: string
          provider_paypal_account: string
          provider_postal_code: string
          service_duration: number
          service_id: number
          service_name: string
          service_price: number
          status: string
        }[]
      }
      unaccent: { Args: { "": string }; Returns: string }
      verify_phone_code_transaction: {
        Args: { p_client_id: string; p_code_hash: string }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
