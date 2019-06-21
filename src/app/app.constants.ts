export class CONSTANTS {
    // tslint:disable-next-line: max-line-length
    public static PRODUCTURL = 'https://iqvia-customer1-developer-edition.ap15.force.com/iqviacustomerone/services/data/v45.0/query/?q=SELECT+name,Account__c,Account__r.Name+from+Drug__c';
    // tslint:disable-next-line: max-line-length
    public static SURVEYURL = 'https://iqvia-org1-dev-ed.my.salesforce.com/services/data/v20.0/query/?q=SELECT+id,name,Description__c,Drug__r.Name,Is_Active__c,Survey_Body__c+from+Survey__c';

    public static ACCESS_TOKEN = 'access_token';
    // tslint:disable-next-line: max-line-length
    public static URL = 'https://iqvia-customer1-developer-edition.ap15.force.com/iqviacustomerone/services/oauth2/authorize?response_type=token&client_id=3MVG9G9pzCUSkzZtbRj_cmuG9Xkd5m4lwUrmcn7ZRTKAwkHCuzx_ZLbj3x6WeMTHuesZR6qFJhextxTK9P2IM&redirect_uri=http://localhost:8100/iqvia/callback';
    public static TARGET = '_self';

    // tslint:disable-next-line: max-line-length
    public static ACTIONPLANURL = 'https://iqvia-customer1-developer-edition.ap15.force.com/iqviacustomerone/services/apexrest/getActionPlan';
}
