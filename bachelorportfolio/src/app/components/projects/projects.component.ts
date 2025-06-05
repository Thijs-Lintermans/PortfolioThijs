import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  technicalDetails: string;
  myRole: string;
  learned: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  showScrollButton = false;
  showModal = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'muizenval',
      title: 'Muizenval - IoT Essentials',
      description: 'Tijdens de lessen Internet of Things Essentials maakte ik een slimme muizenval als solo-project. Het doel was om een systeem te bouwen waarbij een deurtje automatisch sluit wanneer een muis de val binnenkomt. Extra functies zoals een livestream, een AI-herkenningssysteem en een knop op een webpagina om de val vanop afstand te sluiten, maakten het project extra uitdagend.',
      image: 'assets/images/muizenval.jpg',
      technologies: ['IoT', 'Arduino', 'AI', 'MQTT', 'Web Development', 'Teachable Machine'],
      technicalDetails: `De val is gebouwd met hout en LEGO voor het mechanisch systeem. Een Arduino stuurt het geheel aan. Een geluidssensor meet de afstand tot een object; als deze onder een bepaalde drempel komt, sluit de deur. Er is ook een manuele knop voorzien voor bediening. Een LED knippert als de val geactiveerd is. De data (status + aantal activaties) wordt doorgestuurd naar een online dashboard via MQTT. Met een camera en AI (Teachable Machine) wordt gecontroleerd of het echt om een muis gaat. Ook is een livestream en bediening via een webinterface mogelijk.`,
      myRole: `Ik was verantwoordelijk voor het volledige ontwerp en de uitvoering: van het bouwen van de fysieke muizenval tot het programmeren van de Arduino, het instellen van de sensoren, het trainen van het AI-model en het opzetten van de MQTT-verbinding en webinterface.`,
      learned: `Ik heb geleerd hoe je verschillende technologieën binnen een IoT-project combineert: hardware, AI en web. Ook heb ik ervaring opgedaan met het trainen van een AI-model, het gebruik van MQTT voor real-time communicatie en het bouwen van een eenvoudige webinterface. Daarnaast leerde ik hoe belangrijk het is om out-of-the-box te denken bij het bouwen van een prototype, zoals met LEGO voor het deurmechanisme.`
    },
    {
      id: 'wtcroland',
      title: 'WTCRoland - Project PHP',
      description: 'Een webapplicatie ontwikkeld voor de wielerclub WTCRoland om hun jaarlijkse ploegentijdrit te organiseren. Dit groepsproject werd uitgevoerd met zes teamleden voor het vak Project PHP.',
      image: 'assets/images/wtc_roland.png',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      technicalDetails: 'De applicatie is gebouwd met PHP en MySQL voor de backend, en gebruikt HTML, CSS en JavaScript voor de frontend. Het systeem beheert deelnemers, teams, tijden en resultaten van de ploegentijdrit. Er werd gewerkt met loginfunctionaliteit, inschrijfformulieren en automatische tijdsregistratie tijdens het evenement.',
      myRole: 'Als lid van het zeskoppige team was ik betrokken bij zowel de frontend als backend ontwikkeling, met focus op de gebruikersinterface en database-integratie.',
      learned: 'Ik heb geleerd om efficiënt samen te werken in een team via Git en scrum-methodologie. Daarnaast heb ik mijn kennis verdiept in relationele databases, formulierverwerking met PHP en het maken van dynamische pagina’s. Ook leerde ik hoe belangrijk een intuïtieve gebruikersinterface is bij evenementenbeheer.'
    },
    {
      id: 'aitris',
      title: 'Aitris - Project 4.0',
      description: 'Geavanceerd monitoringsdashboard voor ANPR-systemen bij Cipal Schaubroeck. Biedt real-time alerts, historische data analyse, SLA metrics visualisatie en geautomatiseerde probleemdetectie voor efficiënt beheer van verkeers- en parkeerbeheer systemen.',
      image: 'assets/images/Aitris_Dashboard.png',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Monitoring'],
      technicalDetails: 'Het dashboard is ontwikkeld met Angular en TypeScript, met een focus op real-time monitoring en data visualisatie. Het systeem integreert met verschillende ANPR-systemen via REST APIs en biedt geavanceerde monitoring en rapportage functionaliteiten. De frontend bevat grafieken, tabellen, kaarten en een notificatiesysteem.',
      myRole: 'Als stagiair was ik verantwoordelijk voor de ontwikkeling van het monitoringsdashboard, met focus op de frontend implementatie, data visualisatie en integratie met de bestaande systemen.',
      learned: 'Tijdens dit project heb ik diepgaande ervaring opgedaan met Angular, componentgericht ontwikkelen en werken met externe APIs. Ook leerde ik omgaan met complexe datastromen en hoe ik gebruikersfeedback kan verwerken in de frontend. Daarnaast begreep ik beter hoe professionele softwareprojecten verlopen in een bedrijfscontext.'
    }    
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  openProjectDetails(projectId: string) {
    this.selectedProject = this.projects.find(p => p.id === projectId) || null;
    this.showModal = true;
  }

  closeProjectDetails() {
    this.showModal = false;
    this.selectedProject = null;
  }
} 