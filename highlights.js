document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlight');
    const video = document.getElementById('highlight-video');
    const videoDescription = document.getElementById('video-description');

    const videos = {
        1: {
            src: 'https://www.youtube.com/embed/your-video-id-1',
            description: 'A spectacular display of French culture and history, featuring a grand parade of nations, dazzling fireworks, and a performance by renowned artists.'
        },
        2: {
            src: 'https://www.youtube.com/embed/your-video-id-2',
            description: 'Record-breaking performances including Usain Bolt\'s new 100m sprint record and Katie Ledecky\'s 800m freestyle world record.'
        },
        3: {
            src: 'https://www.youtube.com/embed/your-video-id-3',
            description: 'Memorable moments from the Olympics including Simone Biles\' gold in gymnastics and Eliud Kipchoge\'s marathon win.'
        },
        4: {
            src: 'https://www.youtube.com/embed/your-video-id-4',
            description: 'Highlights from Team USA, Great Britain, and Australia, showcasing their top performances.'
        },
        5: {
            src: 'https://www.youtube.com/embed/your-video-id-5',
            description: 'The closing ceremony of the 2024 Olympics, featuring performances and the handover of the Olympic flag.'
        }
    };

    highlights.forEach(highlight => {
        highlight.addEventListener('click', () => {
            const id = highlight.getAttribute('data-id');
            const videoData = videos[id];
            if (videoData) {
                video.src = videoData.src;
                videoDescription.textContent = videoData.description;
            }
        });
    });
});
