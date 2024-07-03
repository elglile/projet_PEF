

const studentProfil = [
    {
        id: 1,
        firstname: "Ayoub",
        lastname: "Chafis",
        age: 18,
        type: "student",
        profilePicture: "https://example.com/profile-picture.jpg",
        gender: "Male",
        university: " University hassan II",
        major: "economie",
        year: "master",
        city: "Settat",
        adress: 'lKirr Rue 32',
        password: "password123",
        lastLogin: "2024-05-07T08:30:00Z",
        contact: {
            email: "ChafikAy@gmail.com",
            phone: "+212687656534",
            // socialMedia: {
            //   facebook: "https://www.facebook.com/Ayoubchf",
            //   twitter: "https://twitter.com/Ayoubchf",
            //   instagram: "https://www.instagram.com/Ayoubchf/"
            // }
        },
        bio: "I'm a college student who loves trying out different foods from around the world!",
    },
    {
        id: 2,
        firstname: "abdellah",
        lastname: "benAli",
        age: 22,
        type: "student",
        profilePicture: "https://example.com/profile-picture.jpg",
        gender: "female",
        university: " University hassan II",
        major: "FST",
        year: "BAc+3",
        city: "settat",
        adress: 'benkassm',
        password: "password22123",
        lastLogin: "2024-02-07T08:30:00Z",
        contact: {
            email: "abdobanAli@gmail.com",
            phone: "+212687342134",
            // socialMedia: {
            //   facebook: "https://www.facebook.com/johndoe",
            //   twitter: "https://twitter.com/johndoe",
            //   instagram: "https://www.instagram.com/johndoe/"
            // }
        },
        bio: "I'm a college student who loves trying out different foods from around the world!",
    },
    // Ajoutez d'autres profils au besoin
];



export const StudentServices = [

 
        {
            price:30,
            img:'./images/1.png',
            id: 1,
            name: "Glovo",
            description: "Service de livraison rapide de divers produits.",
            contact: {
                email: "contact@glovoapp.com",
                phone: "+212 XXX XXX XXX",
                website: "https://glovoapp.com/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "https://www.facebook.com/glovoapp/",
                    twitter: "https://twitter.com/glovo",
                    instagram: "https://www.instagram.com/glovo/"
                }
            }
        }
    ,
    {
        price:30,
        img:'./images/glovo.png',
        id: 1,
        name: "Glovo",
        description: "Service de livraison rapide de divers produits.",
        contact: {
            email: "contact@glovoapp.com",
            phone: "+212 XXX XXX XXX",
            website: "https://glovoapp.com/",
            socialMedia: {
                whatsapp: "",
                facebook: "https://www.facebook.com/glovoapp/",
                twitter: "https://twitter.com/glovo",
                instagram: "https://www.instagram.com/glovo/"
            }
        }
    },


   
        {
            price:40,
            img:'./images/McDonald.jpeg',
            id: 1,
            name: "McDonald's",
            // serviceType: "Food",
            description: "Chaîne de restauration rapide internationale.",
            contact: {
                email: "contact@mcdonalds.ma",
                phone: "+212 XXX XXX XXX",
                website: "https://www.mcdonalds.com/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "https://www.facebook.com/McDonaldsMaroc/",
                    twitter: "https://twitter.com/McDonaldsMaroc",
                    instagram: "https://www.instagram.com/mcdonaldsma/"
                }
            }
        },
        {
            price:40,
            img:'./images/KFC.jpeg',

            id: 2,
            name: "KFC",
            // serviceType: "Food",
            description: "Chaîne de restauration rapide spécialisée dans le poulet frit.",
            contact: {
                email: "contact@kfc.ma",
                phone: "+212 XXX XXX XXX",
                website: "https://www.kfc.ma/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "https://www.facebook.com/KFC.Maroc/",
                    twitter: "https://twitter.com/KFCMOROCCO",
                    instagram: "https://www.instagram.com/kfcma/"
                }
            }
        }
    ,
 {
            price:30,
            img:'./images/glovo.png',
            id: 1,
            name: "Glovo",
            description: "Service de livraison rapide de divers produits.",
            contact: {
                email: "contact@glovoapp.com",
                phone: "+212 XXX XXX XXX",
                website: "https://glovoapp.com/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "https://www.facebook.com/glovoapp/",
                    twitter: "https://twitter.com/glovo",
                    instagram: "https://www.instagram.com/glovo/"
                }
            }
        },
  
        {
            price:20,
            img:'./images/transportSuper.jpeg',

            id: 1,
            name: "transportSuper",
            // serviceType: "transportationServices",
            description: "service de transport",
            contact: {
                email: "contact@transpostS.ma",
                phone: "+212 345765345",
                website: "https://www.transpoertS.ma/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "",
                    twitter: "",
                    instagram: ""
                }
            }
        }, {
            price:30,
            img:'./images/glovo.png',
            id: 1,
            name: "Glovo",
            description: "Service de livraison rapide de divers produits.",
            contact: {
                email: "contact@glovoapp.com",
                phone: "+212 XXX XXX XXX",
                website: "https://glovoapp.com/",
                socialMedia: {
                    whatsapp: "",
                    facebook: "https://www.facebook.com/glovoapp/",
                    twitter: "https://twitter.com/glovo",
                    instagram: "https://www.instagram.com/glovo/"
                }
            }
        }

    ];



const companyPublications = [
    {
        id: 1,
        companyName: "Glovo",
        postTitle: "Offre spéciale pour les étudiants !",
        postDescription: "Commandez avec Glovo et bénéficiez de 20% de réduction sur votre première commande avec le code 'STUDENT20'. Ne manquez pas cette offre exclusive !",
        postDate: "2024-05-10",
        postImage: "https://example.com/images/glovo_offer.jpg",
        postLink: "https://glovoapp.com/",
        likes: 1502,
        comments: [
            {
                id: 101,
                user: "ali",
                rating: 5, // 5 étoiles
                comment: "Super offre, merci Glovo !"
            },
            {
                id: 102,
                user: "ahmed",
                rating: 4, // 4 étoiles
                comment: "Bonne réduction, mais le service de livraison était un peu lent."
            }
        ]
    },
    {
        id: 2,
        companyName: "McDonald's",
        postTitle: "Nouveau menu étudiant disponible !",
        postDescription: "Découvrez notre nouveau menu étudiant à prix réduit ! Des offres spéciales sur les burgers, les frites et les boissons. Rendez-vous dans votre McDonald's le plus proche dès aujourd'hui !",
        postDate: "2024-05-12",
        postImage: "https://example.com/images/mcdonalds_student_menu.jpg",
        postLink: "https://www.mcdonalds.com/",
        likes: 150,
        comments: [
            {
                id: 101,
                user: "khalid",
                rating: 5, // 5 étoiles
                comment: "Super offre, merci Glovo !"
            },
            {
                id: 102,
                user: "salma",
                rating: 4, // 4 étoiles
                comment: "Bonne réduction, mais le service de livraison était un peu lent."
            }
        ]
    },
    {
        companyName: "KFC",
        postTitle: "Concours étudiant : Gagnez des repas gratuits !",
        postDescription: "Participez à notre concours étudiant et tentez de gagner des repas gratuits pendant un mois ! Suivez-nous sur les réseaux sociaux et partagez cette publication pour participer. Bonne chance à tous les étudiants !",
        postDate: "2024-05-15",
        postImage: "https://example.com/images/kfc_student_contest.jpg",
        postLink: "https://www.kfc.ma/",
        likes: 120,
    }
];



