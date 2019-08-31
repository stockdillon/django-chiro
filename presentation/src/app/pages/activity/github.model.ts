export interface Author {
    name: string;
    email: string;
    date: string;
}

export interface Committer {
    name: string;
    email: string;
    date: string;
}

export interface Tree {
    sha: string;
    url: string;
}

export interface Verification {
    verified: boolean;
    reason: string;
    signature?: any;
    payload?: any;
}

export interface Commit {
    author: Author;
    committer: Committer;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}

export interface Author {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Committer {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Parent {
    sha: string;
    url: string;
    html_url: string;
}

export interface CommitWrapper {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author: Author;
    committer: Committer;
    parents: Parent[];
}