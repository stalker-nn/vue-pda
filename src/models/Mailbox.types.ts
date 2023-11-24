export interface IMailbox {
    id: number,
    email: string,
    displayname: string,
    domain_id: number,
    virtual_mailbox: string,
    quota_storage: number,
    quota_message: number,
    description: string,
    enable: boolean,
    created_at: string,
    updated_at: string
}