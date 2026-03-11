document.addEventListener('DOMContentLoaded', () => {
    // Data
    const movies = [
        {
            id: "m1",
            title: "Dune: Parte Dos",
            genre: "Ciencia Ficción, Aventura",
            poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            rating: 8.8,
            duration: "166 min",
            year: "2024",
            age: "+13",
            sinopsis: "El duque Paul Atreides se une a los Fremen y comienza un viaje espiritual y marcial para convertirse en Muad'Dib, mientras intenta evitar el horrible pero inevitable futuro que ha presenciado: una Guerra Santa en su nombre, que se extiende por todo el universo conocido.",
            horarios: ["15:00", "18:30", "21:45"]
        },
        {
            id: "m2",
            title: "Avatar: El Camino del Agua",
            genre: "Acción, Ciencia Ficción",
            poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
            rating: 7.6,
            duration: "192 min",
            year: "2022",
            age: "+12",
            sinopsis: "Jake Sully vive con su nueva familia en el planeta Pandora. Cuando vuelve una amenaza conocida que llega para acabar lo que se había empezado, Jake debe trabajar con Neytiri y el ejército de la raza Na'vi para proteger su planeta.",
            horarios: ["13:00", "17:15", "21:00"]
        },
        {
            id: "m3",
            title: "Spider-Man: No Way Home",
            genre: "Acción, Superhéroes",
            poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1R80vFAe2vL112.jpg",
            rating: 8.0,
            duration: "148 min",
            year: "2021",
            age: "+10",
            sinopsis: "Por primera vez en la historia cinematográfica de Spider-Man, nuestro héroe, vecino y amigo es desenmascarado y por tanto ya no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un Súper Héroe.",
            horarios: ["14:00", "16:45", "19:30", "22:15"]
        },
        {
            id: "m4",
            title: "The Batman",
            genre: "Crimen, Acción",
            poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
            rating: 7.7,
            duration: "176 min",
            year: "2022",
            age: "+16",
            sinopsis: "Cuando un asesino ataca a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía al mejor detective del mundo a una investigación en los bajos fondos, donde se encuentra con personajes como Catwoman o el Pingüino.",
            horarios: ["16:00", "19:45", "23:00"]
        },
        {
            id: "m5",
            title: "Intensa-Mente 2",
            genre: "Animación, Comedia",
            poster: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            rating: 8.2,
            duration: "96 min",
            year: "2024",
            age: "TP",
            sinopsis: "Regresa a la mente de una Riley recién llegada a la adolescencia justo cuando el Cuartel General está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡Nuevas emociones!",
            horarios: ["11:00", "13:30", "16:00", "18:15"]
        },
        {
            id: "m6",
            title: "Oppenheimer",
            genre: "Drama, Historia",
            poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            rating: 8.5,
            duration: "180 min",
            year: "2023",
            age: "+16",
            sinopsis: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica. Una película sobre la paradoja de un hombre enigmático que debe arriesgarse a destruir el mundo para salvarlo.",
            horarios: ["14:30", "18:00", "21:30"]
        }
    ];

    const upcoming = [
        { title: "Deadpool & Wolverine", img: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg" },
        { title: "Alien: Romulus", img: "https://image.tmdb.org/t/p/w500/5OcsGzZ0NqL2y7OioG10XvLsyI3.jpg" },
        { title: "Gladiator II", img: "https://image.tmdb.org/t/p/w500/A7EByudX0e8cxq31Qgdp11llk50.jpg" },
        { title: "Joker: Folie à Deux", img: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg" },
        { title: "Venom: The Last Dance", img: "https://image.tmdb.org/t/p/w500/vBk48HnsJz5WwTxyR0Gk3LqV6Nq.jpg" },
        { title: "Kraven the Hunter", img: "https://image.tmdb.org/t/p/w500/1GvBhieFFrm8R7qECx0pZkIOMZc.jpg" }
    ];

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-xmark');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });

    // Populate Cartelera
    const carteleraGrid = document.getElementById('cartelera-grid');
    if (carteleraGrid) {
        movies.forEach((movie, index) => {
            const delay = index * 0.1;
            const card = document.createElement('div');
            card.className = 'movie-card slide-up group';
            card.style.transitionDelay = `${delay}s`;
            card.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
                <div class="movie-overlay">
                    <div class="movie-card-info">
                        <h3>${movie.title}</h3>
                        <p class="movie-card-genre">${movie.genre}</p>
                        <button class="btn btn-primary btn-sinopsis" data-id="${movie.id}">Ver Sinopsis <i class="fa-solid fa-circle-info"></i></button>
                    </div>
                </div>
            `;
            carteleraGrid.appendChild(card);
        });
    }

    // Populate Carousel
    const carouselTrack = document.getElementById('carousel-track');
    if (carouselTrack) {
        upcoming.forEach(movie => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.innerHTML = `
                <img src="${movie.img}" alt="${movie.title}">
                <div class="carousel-item-overlay">
                    <h4>${movie.title}</h4>
                </div>
            `;
            carouselTrack.appendChild(item);
        });
    }

    // Modal Logic
    const modal = document.getElementById('movie-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    // Elementos del Modal
    const mImg = document.getElementById('modal-img');
    const mTitle = document.getElementById('modal-title');
    const mGenre = document.getElementById('modal-genre');
    const mRating = document.getElementById('modal-rating-val');
    const mDuration = document.getElementById('modal-duration');
    const mYear = document.getElementById('modal-year');
    const mAge = document.getElementById('modal-age');
    const mSinopsis = document.getElementById('modal-sinopsis');
    const mHorarios = document.getElementById('modal-horarios');

    // Event delegation for dynamically added sinopsis buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.btn-sinopsis')) {
            const btn = e.target.closest('.btn-sinopsis');
            const movieId = btn.getAttribute('data-id');
            const movie = movies.find(m => m.id === movieId);
            
            if (movie) {
                // Populate modal
                mImg.src = movie.poster;
                mTitle.textContent = movie.title;
                mGenre.textContent = movie.genre;
                mRating.textContent = movie.rating;
                mDuration.textContent = movie.duration;
                mYear.textContent = movie.year;
                mAge.textContent = movie.age;
                mSinopsis.textContent = movie.sinopsis;

                // Populate horarios
                mHorarios.innerHTML = '';
                movie.horarios.forEach((time, idx) => {
                    const tag = document.createElement('span');
                    tag.className = 'time-tag';
                    if(idx === 0) tag.classList.add('selected');
                    tag.textContent = time;
                    tag.addEventListener('click', function() {
                        document.querySelectorAll('.time-tag').forEach(t => t.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                    mHorarios.appendChild(tag);
                });

                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // prevent scrolling
            }
        }
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Carousel Slider Logic
    const track = document.getElementById('carousel-track');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    let position = 0;
    
    const moveCarousel = (direction) => {
        if (!track) return;
        const itemWidth = track.querySelector('.carousel-item').offsetWidth + 24; // width + gap
        const maxScroll = track.scrollWidth - track.clientWidth;
        
        if (direction === 'next') {
            position += itemWidth;
            if (position > maxScroll) position = 0; // loop back
        } else {
            position -= itemWidth;
            if (position < 0) position = maxScroll; // loop to end
        }
        
        track.style.transform = `translateX(-${position}px)`;
    };

    prevBtn?.addEventListener('click', () => moveCarousel('prev'));
    nextBtn?.addEventListener('click', () => moveCarousel('next'));

    // Optional Autoplay for carousel
    setInterval(() => {
        moveCarousel('next');
    }, 4000);

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
