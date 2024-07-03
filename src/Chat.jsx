import React from 'react';
import  Chatbot from 'react-simple-chatbot';
function Chatboot() {
    return (
      <div>
<Chatbot
  steps={[

    {
      id: '1',
      message: 'Hi! how can i help you?',
      trigger: '2',
    },
    {
      id: '2',
      options: [
        { value: 1, label: 'I want to create an Account', trigger: '10' },
        { value: 2, label: 'I want to contact the support ', trigger: '4' },
        { value: 3, label: 'I want Informations', trigger: '3' },
      ],
    },
    {
      id: '3',
      component:(
        <div>
          Notre plateforme offre un accès facile à des options de logement abordables et
          sécurisées, une sélection de services de transport pratiques, des solutions de
          restauration équilibrées, et des opportunités d'emploi flexibles qui s'adaptent aux
          horaires chargés des étudiants.
        </div>
      ),
      trigger: '6',
    },
    {
      id: '4',
      // message: ' ' +'',  options:[{ value: 1, label: 'back', trigger: '1'}],
      component: (
        <div> Sure! Contact the support on this <br />
              Email: Exemple@gmail.com
         </div>
      ),
      trigger: '1',
    },
    {
      id: '6',
      options :[
        {value: 1, label: 'Travail', trigger: '7'},
        {value: 1, label: 'Transport', trigger: '8'},
        {value: 1, label: 'logements', trigger: '9'},
      ],
    },
    {
      id: '7',
      component: (
        <div> Explorez des opportunités d'emploi adaptées à votre emploi du temps d'étudiant.</div>
      ),
      trigger: '0',
    },
    {
      id: '8',
      component: (
        <div> Bénéficiez d'options de transport pratiques et abordables pour vous déplacer en toute
              simplicité.
              "Repas Sains à Portée de Main" - Découvrez des solutions de restauration saines et
              équilibrées pour répondre à vos besoins nutritionnels.
              </div>
      ),
      trigger: '0',
    },
    {
      id: '9',
      component: (
        <div>Trouvez facilement des logements adaptés à vos besoins et à votre budget.</div>
      ),
      trigger: '0',
    },
    {
      id: '10',
      component: (
        <div>click on the sign up button and Fill input's with your infos :)</div>
      ),
      trigger: '0',
    }
    ,    {
      id: '0',
      message: 'Could you please provide guidance or additional support?',
      trigger: '2',
    },
  ]}
  floating={true}
/>
</div>
    );
}

export default Chatboot;