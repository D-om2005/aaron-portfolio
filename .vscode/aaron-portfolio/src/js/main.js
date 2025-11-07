document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header');
    header.innerHTML = '<h1>Aaron\'s Portfolio</h1>';
    document.body.prepend(header);

    const nav = document.createElement('nav');
    nav.innerHTML = `
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    `;
    header.appendChild(nav);

    fetch('./data/resume.json')
        .then(response => response.json())
        .then(data => {
            const aboutSection = document.createElement('section');
            aboutSection.id = 'about';
            aboutSection.innerHTML = `<h2>About Me</h2><p>${data.about}</p>`;
            document.body.appendChild(aboutSection);

            const projectsSection = document.createElement('section');
            projectsSection.id = 'projects';
            projectsSection.innerHTML = '<h2>Projects</h2>';
            data.projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
                projectsSection.appendChild(projectItem);
            });
            document.body.appendChild(projectsSection);

            const contactSection = document.createElement('section');
            contactSection.id = 'contact';
            contactSection.innerHTML = `<h2>Contact</h2><p>Email: ${data.contact.email}</p>`;
            document.body.appendChild(contactSection);
        })
        .catch(error => console.error('Error fetching resume data:', error));
});