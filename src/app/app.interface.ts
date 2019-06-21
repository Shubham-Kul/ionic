export interface Product {
    totalSize: number;
    done: boolean;
    records: Record[];
}

export interface Record {
    attributes?: Attributes;
    Name?: string;
    Account__c?: string;
    Account__r?: Accountr;
    Id?: string;
    Description__c?: string;
    Drug__r?: Drugr;
    Is_Active__c?: boolean;
    Survey_Body__c?: string;
}

export interface Accountr {
    attributes: Attributes;
    Name: string;
}

export interface Attributes {
    type: string;
    url: string;
}
export interface Survey {
    totalSize: number;
    done: boolean;
    records: Record[];
}

export interface Drugr {
    attributes: Attributes;
    Name: string;
}
export interface ActionPlan {
    totalSize: number;
    done: boolean;
    records: Record[];
}

