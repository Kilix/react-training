export default [
    {
        id: 1,
        firstname: 'Dan',
        lastname: 'Abramov',
        twitterHandle: 'dan_abramov',
        keywords: ['react', 'fp']
    },
    {
        id: 2,
        firstname: 'Kent',
        middleName: 'C',
        lastname: 'Dodds',
        twitterHandle: 'kentcdodds',
        keywords: ['react', 'fp'],
    },
    {
        id: 3,
        firstname: 'André',
        lastname: 'Staltz',
        twitterHandle: 'andrestaltz',
        keywords: ['cyclejs', 'typescript', 'fp'],

    },
    {
        id: 4,
        firstname: 'Todd',
        lastname: 'Motto',
        twitterHandle: 'toddmotto',
        keywords: ['angular', 'typescript']
    },
    {
        id: 5,
        firstname: 'Amélie',
        lastname: "Lefèvre",
        twitterHandle: null,
        keywords: ['react', 'fp'],
    }
];

export const fetchTwitterBio = (id) => {
    switch (id) {
        case 1:
            return Promise.resolve({
                bio: 'Co-authored Redux, Create React App, React Hot Loader, React DnD. Helping improve @reactjs. Personal opinions. #juniordevforlife',

            });

        case 2:
            return Promise.resolve({
                bio: 'Making software dev more accessible · Mormon, Husband, Father, Teacher · OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters @JavaScriptAir · #JS',
            });

        case 3:
            return Promise.resolve({
                bio: 'Reactive programming expert, @cyclejs creator and @reactivex addict. I work at @futurice with front-end web. Tweets are my own.',
            });

        case 4:
            return Promise.resolve({
                bio: '🚀⚡️ Owner and trainer @UltimateAngular. Developer Expert @Google. Engaged to @RachaelLPurser. @ken_wheeler advocate.',
            });

        case 5:
            return Promise.reject(new Error('No twitter account'));

        default:
            return Promise.reject(new Error('This user does not exist'));
    }
}
