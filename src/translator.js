 document.getElementById("language").addEventListener("click", ()=>{
            if(document.getElementById("language").getAttribute('language') === "english"){
                i18next.changeLanguage('es');
                document.getElementById("language").setAttribute('language', 'spanish');
                document.documentElement.lang = 'es';
            }else if(document.getElementById("language").getAttribute('language') === "spanish"){
                i18next.changeLanguage('en');
                document.getElementById("language").setAttribute('language', 'english');
                document.documentElement.lang = 'en';
            }

            translate([...document.querySelector("body").children]);
        });

        i18next.init({
            lng: 'es',
            debug: false,
            resources: {
                en: {
                    translation: {
                        "language-label": "Español",
                        "role": "Freelance web developer",
                        "about-me": "About Me",
                        "personal-information": `I’m Brian Perez Perez, a passionate freelance web developer from Spain, 
                            who builds web applications for businesses looking to improve their online 
                            presence, increase visibility, and attract more clients. I create websites 
                            that allow owners to manage their website content easily, without having to 
                            handle hosting or website maintenance.`,
                        "social-media": "Social Media",
                        "social-email": "Email",
                        "skills-technologies": "Skills & Technologies",
                        "languages": "Languages",
                        "tools": "Technology",
                        "footer-by": "by",
                        "footer-license": "is licensed under"
                    }
                },

                es: {
                    translation: {
                        "language-label": "English",
                        "role": "Desarrollador web freelance",
                        "about-me": "Sobre Mí",
                        "personal-information": `Soy Brian Perez Perez, 
                            un desarrollador web freelance de España que crea aplicaciones web para negocios que buscan mejorar su 
                            presencia online, aumentar su visibilidad y atraer más clientes. Desarrollo sitios web que permiten a 
                            los propietarios gestionar fácilmente el contenido de su página, sin tener que encargarse del alojamiento 
                            ni del mantenimiento web.`,
                        "social-media": "Redes Sociales",
                        "social-email": "Correo electrónico",
                        "skills-technologies": "Habilidades y Tecnologías",
                        "languages": "Lenguajes",
                        "tools": "Tecnología",
                        "footer-by": "de",
                        "footer-license": "está bajo la licencia"
                    }
                }
            }
        });
    
    function translate(children){
        children.forEach(element => {
        //Recursive call to access all elements
            if(element.children.length > 0){
                translate([...element.children]);
            }else{
                if(i18next.t(element.id) !== element.id){
                    element.textContent = i18next.t(element.id);
                }
            }
        });
    }
