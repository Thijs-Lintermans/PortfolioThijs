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
      title: 'Muizenval',
      description: 'Een slimme muizenval die automatisch sluit wanneer er een muis wordt gedetecteerd. Het project combineert IoT-technologie met AI om een efficiënte en humane manier van muizenbestrijding te realiseren.',
      image: 'assets/images/muizenval.jpg',
      technologies: ['IoT', 'Arduino', 'AI', 'Web Development'],
      technicalDetails: 'Het project maakt gebruik van een Arduino microcontroller met verschillende sensoren om beweging te detecteren. Een AI-model analyseert de beelden om te bepalen of er daadwerkelijk een muis aanwezig is. De data wordt naar een webplatform gestuurd waar de status van de val kan worden gemonitord en bediend.',
      myRole: 'Als ontwikkelaar was ik verantwoordelijk voor het programmeren van de Arduino, het implementeren van de sensoren, en het ontwikkelen van de webinterface voor monitoring en bediening.'
    },
    {
      id: 'wtcroland',
      title: 'WTCRoland',
      description: 'Een webapplicatie ontwikkeld voor de wielerclub WTCRoland om hun jaarlijkse ploegentijdrit te organiseren. Dit groepsproject werd uitgevoerd met zes teamleden voor het vak Project PHP.',
      image: 'assets/images/wtc_roland.png',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
      technicalDetails: 'De applicatie is gebouwd met PHP en MySQL voor de backend, en gebruikt HTML, CSS en JavaScript voor de frontend. Het systeem beheert deelnemers, teams, tijden en resultaten van de ploegentijdrit.',
      myRole: 'Als lid van het zeskoppige team was ik betrokken bij zowel de frontend als backend ontwikkeling, met focus op de gebruikersinterface en database-integratie.'
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