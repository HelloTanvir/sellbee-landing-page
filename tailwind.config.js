module.exports = {
    purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'bg-header-btn': '#1E685B',
                'bg-banner-left': '#049cbc',
                'bg-banner-right': '#43d7b5',
                'mid-box-grad-bot-tr': '#2f8ce1',
                'mid-box-grad-bot-br': '#b45fbc',
                'title-border': '#5c41dc',
                'bg-reseller-grad-left': '#0F5D81',
                'bg-reseller-grad-right': '#0091FE',
                'bg-service-btn': '#5C41DC',
            },
            spacing: {
                'banner-height-lg': '542px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
