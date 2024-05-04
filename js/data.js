const projectList = [
    {
        name: "Single 'Survivor's guilt'",
        year: '2024',
        type: 'Motion design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/single-survivors-guilt.webp)',
        link: 'https://www.youtube.com/watch?v=zjksdE0Df9A'
    },
    {
        name: 'BlakeLW',
        year: '2024',
        type: 'Website',
        category: 'Development',
        image: 'url(./assets/images/projects/development/blakelw.webp)',
        link: 'https://milkycocomoon.github.io/BlakeLW/'
    },
    {
        name: 'Leafer',
        year: '2024',
        type: 'Web application',
        category: 'Development',
        image: 'url(./assets/images/projects/development/leafer.webp)',
        link: 'https://milkycocomoon.github.io/Leafer/'
    },
    {
        name: 'Leafer',
        year: '2024',
        type: 'UI/UX design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/leafer.webp)',
        link: 'https://www.behance.net/gallery/194549289/Leafer'
    },
    {
        name: "EP 'Warden of Nothing'",
        year: '2024',
        type: 'Motion design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/warden-of-nothing.webp)',
        link: 'https://www.behance.net/gallery/189095023/EP-Warden-of-Nothing'
    },
    {
        name: "EP 'Cinereus V'",
        year: '2023',
        type: 'Motion design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/cinereusv.webp)',
        link: 'https://www.behance.net/gallery/189093035/EP-Cinereus-V'
    },
    {
        name: "EP 'Black sheep'",
        year: '2023',
        type: 'Motion design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/black-sheep.webp)',
        link: 'https://www.behance.net/gallery/189090357/EP-Black-Sheep'
    },
    {
        name: 'Minecraftsweeper',
        year: '2023',
        type: 'JavaScript game',
        category: 'Development',
        image: 'url(./assets/images/projects/development/minesweeper.webp)',
        link: 'https://rolling-scopes-school.github.io/milkycocomoon-JSFE2023Q1/minesweeper/index.html'
    },
    {
        name: 'Virtual keydoard',
        year: '2023',
        type: 'JavaScript project',
        category: 'Development',
        image: 'url(./assets/images/projects/development/virtual-keyboard.webp)',
        link: 'https://milkycocomoon.github.io/virtual-keyboard/'
    },
    {
        name: 'Momentum app',
        year: '2023',
        type: 'JavaScript project',
        category: 'Development',
        image: 'url(./assets/images/projects/development/momentum.webp)',
        link: 'https://rolling-scopes-school.github.io/milkycocomoon-JSFEPRESCHOOL2022Q4/momentum/'
    },
    {
        name: 'Wooden toys for kids',
        year: '2023',
        type: 'Graphic design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/wooden-toys-for-kids.webp)',
        link: 'https://www.behance.net/gallery/189091303/Logoryonok-Wooden-toys-for-child-development'
    },
    {
        name: "Enamel'shop",
        year: '2022',
        type: 'Product and brand design',
        category: 'Design',
        image: 'url(./assets/images/projects/design/enamelshop.webp)',
        link: 'https://www.behance.net/gallery/150533449/Enamelshop'
    },
    {
        name: 'The Red book of Endangered Animals',
        year: '2022',
        type: 'Book',
        category: 'Design',
        image: 'url(./assets/images/projects/design/the-red-book-of-endangered-animals.webp)',
        link: 'https://www.behance.net/gallery/147297015/The-Red-Book-of-Endangered-animals'
    },
    {
        name: 'Youtube channel design',
        year: '2022',
        type: 'Branding',
        category: 'Design',
        image: 'url(./assets/images/projects/design/youtube-channel.webp)',
        link: 'https://www.behance.net/gallery/147296613/Personal-design-for-music-YouTube-channel'
    },
    {
        name: 'Atlas x Lily',
        year: '2024',
        type: 'Original',
        category: 'Art',
        image: 'url(./assets/images/projects/art/original_atlasxlily-01.webp)',
        link: 'https://x.com/lu_nana_lily/status/1783199316632322454'
    },
    {
        name: 'Atlas x Lily',
        year: '2024',
        type: 'Original',
        category: 'Art',
        image: 'url(./assets/images/projects/art/original_atlasxlily-00.webp)',
        link: 'https://x.com/lu_nana_lily/status/1761350990765142397'
    },
    {
        name: 'Lily',
        year: '2024',
        type: 'Original',
        category: 'Art',
        image: 'url(./assets/images/projects/art/original_lily.webp)',
        link: 'https://x.com/lu_nana_lily/status/1758804878040649868'
    },
    {
        name: 'Camp',
        year: '2024',
        type: 'Commission',
        category: 'Art',
        image: 'url(./assets/images/projects/art/commission_camp.webp)',
        link: 'https://x.com/lu_nana_lily/status/1757454384185716825'
    },
    {
        name: 'Elf',
        year: '2023',
        type: 'Commission',
        category: 'Art',
        image: 'url(./assets/images/projects/art/commission_elf.webp)',
        link: 'https://x.com/lu_nana_lily/status/1734273673601696069'
    },
    {
        name: 'Nyanners',
        year: '2023',
        type: 'Fanart',
        category: 'Art',
        image: 'url(./assets/images/projects/art/fanart_nyanners.webp)',
        link: 'https://x.com/lu_nana_lily/status/1731701039479345555'
    },
    {
        name: 'Shylily',
        year: '2023',
        type: 'Fanart',
        category: 'Art',
        image: 'url(./assets/images/projects/art/fanart_shylily.webp)',
        link: 'https://x.com/lu_nana_lily/status/1730297981914448182'
    },
    {
        name: 'Frieren',
        year: '2023',
        type: 'Fanart',
        category: 'Art',
        image: 'url(./assets/images/projects/art/fanart_frieren.webp)',
        link: 'https://x.com/lu_nana_lily/status/1729548890003603818'
    },
    {
        name: 'Swordland cover',
        year: '2023',
        type: 'Animation',
        category: 'Art',
        image: 'url(./assets/images/projects/art/sao-cover-swordland.webp)',
        link: 'https://youtu.be/d6Dcwntmhqg'
    },
    {
        name: 'Silvervale',
        year: '2023',
        type: 'Fanart',
        category: 'Art',
        image: 'url(./assets/images/projects/art/fanart_silvervale-card.webp)',
        link: 'https://x.com/lu_nana_lily/status/1663915170949627918'
    },
    {
        name: 'Yuniiho',
        year: '2023',
        type: 'Fanart',
        category: 'Art',
        image: 'url(./assets/images/projects/art/fanart_yuniiho-card.webp)',
        link: 'https://x.com/lu_nana_lily/status/1656029593386532866'
    },
]
export default projectList;