import { testApi as api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    editIssue: build.mutation<EditIssueApiResponse, EditIssueApiArg>({
      query: (queryArg) => ({
        url: `/rest/api/3/issue/${queryArg.issueIdOrKey}`,
        method: "PUT",
        body: queryArg.issueUpdateDetails,
        params: {
          notifyUsers: queryArg.notifyUsers,
          overrideScreenSecurity: queryArg.overrideScreenSecurity,
          overrideEditableFlag: queryArg.overrideEditableFlag,
          returnIssue: queryArg.returnIssue,
          expand: queryArg.expand,
        },
      }),
    }),
    searchAndReconsileIssuesUsingJqlPost: build.query<
      SearchAndReconsileIssuesUsingJqlPostApiResponse,
      SearchAndReconsileIssuesUsingJqlPostApiArg
    >({
      query: (queryArg) => ({
        url: `/rest/api/3/search/jql`,
        method: "POST",
        body: queryArg.searchAndReconcileRequestBean,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedTestApi };
export type EditIssueApiResponse =
  /** status 200 Returned if the request is successful and the `returnIssue` parameter is `true` */
    | any
    | /** status 204 Returned if the request is successful. */ any;
export type EditIssueApiArg = {
  /** The ID or key of the issue. */
  issueIdOrKey: string;
  /** Whether a notification email about the issue update is sent to all watchers. To disable the notification, administer Jira or administer project permissions are required. If the user doesn't have the necessary permission the request is ignored. */
  notifyUsers?: boolean;
  /** Whether screen security is overridden to enable hidden fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideScreenSecurity?: boolean;
  /** Whether screen security is overridden to enable uneditable fields to be edited. Available to Connect app users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg) and Forge apps acting on behalf of users with *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg). */
  overrideEditableFlag?: boolean;
  /** Whether the response should contain the issue with fields edited in this request. The returned issue will have the same format as in the [Get issue API](#api-rest-api-3-issue-issueidorkey-get). */
  returnIssue?: boolean;
  /** The Get issue API expand parameter to use in the response if the `returnIssue` parameter is `true`. */
  expand?: string;
  issueUpdateDetails: IssueUpdateDetails;
};
export type SearchAndReconsileIssuesUsingJqlPostApiResponse =
  /** status 200 Returned if the request is successful. */ SearchAndReconcileResultsRead;
export type SearchAndReconsileIssuesUsingJqlPostApiArg = {
  searchAndReconcileRequestBean: SearchAndReconcileRequestBean;
};
export type HistoryMetadataParticipant = {
  /** The URL to an avatar for the user or system associated with a history record. */
  avatarUrl?: string;
  /** The display name of the user or system associated with a history record. */
  displayName?: string;
  /** The key of the display name of the user or system associated with a history record. */
  displayNameKey?: string;
  /** The ID of the user or system associated with a history record. */
  id?: string;
  /** The type of the user or system associated with a history record. */
  type?: string;
  /** The URL of the user or system associated with a history record. */
  url?: string;
  [key: string]: any;
};
export type HistoryMetadata = {
  /** The activity described in the history record. */
  activityDescription?: string;
  /** The key of the activity described in the history record. */
  activityDescriptionKey?: string;
  /** Details of the user whose action created the history record. */
  actor?: HistoryMetadataParticipant;
  /** Details of the cause that triggered the creation the history record. */
  cause?: HistoryMetadataParticipant;
  /** The description of the history record. */
  description?: string;
  /** The description key of the history record. */
  descriptionKey?: string;
  /** The description of the email address associated the history record. */
  emailDescription?: string;
  /** The description key of the email address associated the history record. */
  emailDescriptionKey?: string;
  /** Additional arbitrary information about the history record. */
  extraData?: {
    [key: string]: string;
  };
  /** Details of the system that generated the history record. */
  generator?: HistoryMetadataParticipant;
  /** The type of the history record. */
  type?: string;
  [key: string]: any;
};
export type EntityProperty = {
  /** The key of the property. Required on create and update. */
  key?: string;
  /** The value of the property. Required on create and update. */
  value?: any;
};
export type IssueTransition = {
  /** The ID of the issue transition. Required when specifying a transition to undertake. */
  id?: string;
  looped?: boolean;
  [key: string]: any;
};
export type FieldMetadata = {};
export type JsonTypeBean = {};
export type JsonTypeBeanRead = {
  /** If the field is a custom field, the configuration of the field. */
  configuration?: {
    [key: string]: any;
  };
  /** If the field is a custom field, the URI of the field. */
  custom?: string;
  /** If the field is a custom field, the custom ID of the field. */
  customId?: number;
  /** When the data type is an array, the name of the field items within the array. */
  items?: string;
  /** If the field is a system field, the name of the field. */
  system?: string;
  /** The data type of the field. */
  type: string;
};
export type FieldMetadataRead = {
  /** The list of values allowed in the field. */
  allowedValues?: any[];
  /** The URL that can be used to automatically complete the field. */
  autoCompleteUrl?: string;
  /** The configuration properties. */
  configuration?: {
    [key: string]: any;
  };
  /** The default value of the field. */
  defaultValue?: any;
  /** Whether the field has a default value. */
  hasDefaultValue?: boolean;
  /** The key of the field. */
  key: string;
  /** The name of the field. */
  name: string;
  /** The list of operations that can be performed on the field. */
  operations: string[];
  /** Whether the field is required. */
  required: boolean;
  /** The data type of the field. */
  schema: JsonTypeBeanRead;
};
export type StatusDetails = {
  [key: string]: any;
};
export type Scope = {
  [key: string]: any;
};
export type ProjectDetails = {
  /** The ID of the project. */
  id?: string;
};
export type AvatarUrlsBean = {
  /** The URL of the item's 16x16 pixel avatar. */
  "16x16"?: string;
  /** The URL of the item's 24x24 pixel avatar. */
  "24x24"?: string;
  /** The URL of the item's 32x32 pixel avatar. */
  "32x32"?: string;
  /** The URL of the item's 48x48 pixel avatar. */
  "48x48"?: string;
};
export type UpdatedProjectCategory = {};
export type UpdatedProjectCategoryRead = {
  /** The name of the project category. */
  description?: string;
  /** The ID of the project category. */
  id?: string;
  /** The description of the project category. */
  name?: string;
  /** The URL of the project category. */
  self?: string;
};
export type ProjectDetailsRead = {
  /** The URLs of the project's avatars. */
  avatarUrls?: AvatarUrlsBean;
  /** The ID of the project. */
  id?: string;
  /** The key of the project. */
  key?: string;
  /** The name of the project. */
  name?: string;
  /** The category the project belongs to. */
  projectCategory?: UpdatedProjectCategoryRead;
  /** The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project. */
  projectTypeKey?: "software" | "service_desk" | "business";
  /** The URL of the project details. */
  self?: string;
  /** Whether or not the project is simplified. */
  simplified?: boolean;
};
export type ScopeRead = {
  /** The project the item has scope in. */
  project?: ProjectDetailsRead;
  /** The type of scope. */
  type?: "PROJECT" | "TEMPLATE";
  [key: string]: any;
};
export type StatusCategory = {
  [key: string]: any;
};
export type StatusCategoryRead = {
  /** The name of the color used to represent the status category. */
  colorName?: string;
  /** The ID of the status category. */
  id?: number;
  /** The key of the status category. */
  key?: string;
  /** The name of the status category. */
  name?: string;
  /** The URL of the status category. */
  self?: string;
  [key: string]: any;
};
export type StatusDetailsRead = {
  /** The description of the status. */
  description?: string;
  /** The URL of the icon used to represent the status. */
  iconUrl?: string;
  /** The ID of the status. */
  id?: string;
  /** The name of the status. */
  name?: string;
  /** The scope of the field. */
  scope?: ScopeRead;
  /** The URL of the status. */
  self?: string;
  /** The category assigned to the status. */
  statusCategory?: StatusCategoryRead;
  [key: string]: any;
};
export type IssueTransitionRead = {
  /** Expand options that include additional transition details in the response. */
  expand?: string;
  /** Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request. */
  fields?: {
    [key: string]: FieldMetadataRead;
  };
  /** Whether there is a screen associated with the issue transition. */
  hasScreen?: boolean;
  /** The ID of the issue transition. Required when specifying a transition to undertake. */
  id?: string;
  /** Whether the transition is available to be performed. */
  isAvailable?: boolean;
  /** Whether the issue has to meet criteria before the issue transition is applied. */
  isConditional?: boolean;
  /** Whether the issue transition is global, that is, the transition is applied to issues regardless of their status. */
  isGlobal?: boolean;
  /** Whether this is the initial issue transition for the workflow. */
  isInitial?: boolean;
  looped?: boolean;
  /** The name of the issue transition. */
  name?: string;
  /** Details of the issue status after the transition. */
  to?: StatusDetailsRead;
  [key: string]: any;
};
export type FieldUpdateOperation = {
  /** The value to add to the field. */
  add?: any;
  /** The field value to copy from another issue. */
  copy?: any;
  /** The value to edit in the field. */
  edit?: any;
  /** The value to removed from the field. */
  remove?: any;
  /** The value to set in the field. */
  set?: any;
};
export type IssueUpdateDetails = {
  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: {
    [key: string]: any;
  };
  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be add or update. */
  properties?: EntityProperty[];
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransition;
  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: {
    [key: string]: FieldUpdateOperation[];
  };
  [key: string]: any;
};
export type IssueUpdateDetailsRead = {
  /** List of issue screen fields to update, specifying the sub-field to update and its value for each field. This field provides a straightforward option when setting a sub-field. When multiple sub-fields or other operations are required, use `update`. Fields included in here cannot be included in `update`. */
  fields?: {
    [key: string]: any;
  };
  /** Additional issue history details. */
  historyMetadata?: HistoryMetadata;
  /** Details of issue properties to be add or update. */
  properties?: EntityProperty[];
  /** Details of a transition. Required when performing a transition, optional when creating or editing an issue. */
  transition?: IssueTransitionRead;
  /** A Map containing the field field name and a list of operations to perform on the issue screen field. Note that fields included in here cannot be included in `fields`. */
  update?: {
    [key: string]: FieldUpdateOperation[];
  };
  [key: string]: any;
};
export type SearchAndReconcileResults = {};
export type IncludedFields = {
  actuallyIncluded?: string[];
  excluded?: string[];
  included?: string[];
};
export type IssueBean = {
  fields?: {
    [key: string]: any;
  };
  fieldsToInclude?: IncludedFields;
};
export type PageOfChangelogs = {};
export type Changelog = {};
export type UserDetails = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
};
export type UserDetailsRead = {
  /** The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. */
  accountId?: string;
  /** The type of account represented by this user. This will be one of 'atlassian' (normal users), 'app' (application user) or 'customer' (Jira Service Desk customer user) */
  accountType?: string;
  /** Whether the user is active. */
  active?: boolean;
  /** The avatars of the user. */
  avatarUrls?: AvatarUrlsBean;
  /** The display name of the user. Depending on the user’s privacy settings, this may return an alternative value. */
  displayName?: string;
  /** The email address of the user. Depending on the user’s privacy settings, this may be returned as null. */
  emailAddress?: string;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  key?: string;
  /** This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. */
  name?: string;
  /** The URL of the user. */
  self?: string;
  /** The time zone specified in the user's profile. Depending on the user’s privacy settings, this may be returned as null. */
  timeZone?: string;
};
export type ChangeDetails = {};
export type ChangeDetailsRead = {
  /** The name of the field changed. */
  field?: string;
  /** The ID of the field changed. */
  fieldId?: string;
  /** The type of the field changed. */
  fieldtype?: string;
  /** The details of the original value. */
  from?: string;
  /** The details of the original value as a string. */
  fromString?: string;
  /** The details of the new value. */
  to?: string;
  /** The details of the new value as a string. */
  toString?: string;
};
export type ChangelogRead = {
  /** The user who made the change. */
  author?: UserDetailsRead;
  /** The date on which the change took place. */
  created?: string;
  /** The history metadata associated with the changed. */
  historyMetadata?: HistoryMetadata;
  /** The ID of the changelog. */
  id?: string;
  /** The list of items changed. */
  items?: ChangeDetailsRead[];
};
export type PageOfChangelogsRead = {
  /** The list of changelogs. */
  histories?: ChangelogRead[];
  /** The maximum number of results that could be on the page. */
  maxResults?: number;
  /** The index of the first item returned on the page. */
  startAt?: number;
  /** The number of results on the page. */
  total?: number;
};
export type IssueUpdateMetadata = {};
export type IssueUpdateMetadataRead = {
  fields?: {
    [key: string]: FieldMetadataRead;
  };
};
export type Operations = {
  [key: string]: any;
};
export type SimpleLink = {
  href?: string;
  iconClass?: string;
  id?: string;
  label?: string;
  styleClass?: string;
  title?: string;
  weight?: number;
};
export type LinkGroup = {
  groups?: LinkGroup[];
  header?: SimpleLink;
  id?: string;
  links?: SimpleLink[];
  styleClass?: string;
  weight?: number;
};
export type OperationsRead = {
  /** Details of the link groups defining issue operations. */
  linkGroups?: LinkGroup[];
  [key: string]: any;
};
export type IssueBeanRead = {
  /** Details of changelogs associated with the issue. */
  changelog?: PageOfChangelogsRead;
  /** The metadata for the fields on the issue that can be amended. */
  editmeta?: IssueUpdateMetadataRead;
  /** Expand options that include additional issue details in the response. */
  expand?: string;
  fields?: {
    [key: string]: any;
  };
  fieldsToInclude?: IncludedFields;
  /** The ID of the issue. */
  id?: string;
  /** The key of the issue. */
  key?: string;
  /** The ID and name of each field present on the issue. */
  names?: {
    [key: string]: string;
  };
  /** The operations that can be performed on the issue. */
  operations?: OperationsRead;
  /** Details of the issue properties identified in the request. */
  properties?: {
    [key: string]: any;
  };
  /** The rendered value of each field present on the issue. */
  renderedFields?: {
    [key: string]: any;
  };
  /** The schema describing each field present on the issue. */
  schema?: {
    [key: string]: JsonTypeBeanRead;
  };
  /** The URL of the issue details. */
  self?: string;
  /** The transitions that can be performed on the issue. */
  transitions?: IssueTransitionRead[];
  /** The versions of each field on the issue. */
  versionedRepresentations?: {
    [key: string]: {
      [key: string]: any;
    };
  };
};
export type SearchAndReconcileResultsRead = {
  /** The list of issues found by the search or reconsiliation. */
  issues?: IssueBeanRead[];
  /** The ID and name of each field in the search results. */
  names?: {
    [key: string]: string;
  };
  /** Continuation token to fetch the next page. If this result represents the last or the only page this token will be null. This token will expire in 7 days. */
  nextPageToken?: string;
  /** The schema describing the field types in the search results. */
  schema?: {
    [key: string]: JsonTypeBeanRead;
  };
};
export type SearchAndReconcileRequestBean = {
  /** Use [expand](#expansion) to include additional information about issues in the response. Note that, unlike the majority of instances where `expand` is specified, `expand` is defined as a comma-delimited string of values. The expand options are:
    
     *  `renderedFields` Returns field values rendered in HTML format.
     *  `names` Returns the display name of each field.
     *  `schema` Returns the schema describing a field type.
     *  `transitions` Returns all possible transitions for the issue.
     *  `operations` Returns all possible operations for the issue.
     *  `editmeta` Returns information about how each field can be edited.
     *  `changelog` Returns a list of recent updates to an issue, sorted by date, starting from the most recent.
     *  `versionedRepresentations` Instead of `fields`, returns `versionedRepresentations` a JSON array containing each version of a field's value, with the highest numbered item representing the most recent version.
    
    Examples: `"names,changelog"` Returns the display name of each field as well as a list of recent updates to an issue. */
  expand?: string;
  /** A list of fields to return for each issue. Use it to retrieve a subset of fields. This parameter accepts a comma-separated list. Expand options include:
    
     *  `*all` Returns all fields.
     *  `*navigable` Returns navigable fields.
     *  `id` Returns only issue IDs.
     *  Any issue field, prefixed with a dash to exclude.
    
    The default is `id`.
    
    Examples:
    
     *  `summary,comment` Returns the summary and comments fields only.
     *  `*all,-comment` Returns all fields except comments.
    
    Multiple `fields` parameters can be included in a request.
    
    Note: By default, this resource returns IDs only. This differs from [GET issue](#api-rest-api-3-issue-issueIdOrKey-get) where the default is all fields. */
  fields?: string[];
  /** Reference fields by their key (rather than ID). The default is `false`. */
  fieldsByKeys?: boolean;
  /** A [JQL](https://confluence.atlassian.com/x/egORLQ) expression. For performance reasons, this parameter requires a bounded query. A bounded query is a query with a search restriction.
    
     *  Example of an unbounded query: `order by key desc`.
     *  Example of a bounded query: `assignee = currentUser() order by key`.
    
    Additionally, `orderBy` clause can contain a maximum of 7 fields. */
  jql?: string;
  /** The maximum number of items to return per page. To manage page size, API may return fewer items per page where a large number of fields are requested. The greatest number of items returned per page is achieved when requesting `id` or `key` only. It returns max 5000 issues. */
  maxResults?: number;
  /** The token for a page to fetch that is not the first page. The first page has a `nextPageToken` of `null`. Use the `nextPageToken` to fetch the next page of issues. */
  nextPageToken?: string;
  /** A list of up to 5 issue properties to include in the results. This parameter accepts a comma-separated list. */
  properties?: string[];
  /** Strong consistency issue ids to be reconciled with search results. Accepts max 50 ids. All issues must exist. */
  reconcileIssues?: number[];
};
