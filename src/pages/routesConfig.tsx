import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
} from '@tabler/icons-react';


export const items = {
    Menu: [
        {name: 'Games and Events', icon: <IconCoin/>, path: '/game'},
        {name: 'Create Game', icon: <IconCode/>, path: '/game/create'},
    ],
    Resources: [
        {name: 'FAQs', icon: <IconChartPie3/>, path: '/faqs'},
        {name: 'Support', icon: <IconFingerprint/>, path: '/support'},
        {name: 'Advertising', icon: <IconBook/>, path: '/advertising'},
    ],
};