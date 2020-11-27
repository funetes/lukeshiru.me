import { Fragment } from "preact";
import { ResumeCertification } from "../components/ResumeCertification";
import { ResumeCertifications } from "../components/ResumeCertifications";
import { ResumeCourse } from "../components/ResumeCourse";
import { ResumeCourses } from "../components/ResumeCourses";
import { ResumeDate } from "../components/ResumeDate";
import { ResumeMain } from "../components/ResumeMain";
import { ResumeMainHeader } from "../components/ResumeMainHeader";
import { ResumeName } from "../components/ResumeName";
import { ResumePhoto } from "../components/ResumePhoto";
import { ResumePosition } from "../components/ResumePosition";
import { ResumeSection } from "../components/ResumeSection";
import { ResumeWorkPosition } from "../components/ResumeWorkPosition";
import { ResumeWorkPositions } from "../components/ResumeWorkPositions";
import { ResumeWorkPositionTitle } from "../components/ResumeWorkPositionTitle";
import { ResumeWorkProject } from "../components/ResumeWorkProject";
import { ResumeWorkProjects } from "../components/ResumeWorkProjects";
import resumeData from "../data/resume.json";

export const resume = (
	<Fragment>
		<ResumeMain>
			<ResumePhoto src="/assets/images/photo.jpg" />
			<ResumeMainHeader>
				<ResumeName>{resumeData.main.name}</ResumeName>
				<ResumePosition>{resumeData.main.position}</ResumePosition>
			</ResumeMainHeader>
		</ResumeMain>
		<ResumeSection title="Experience">
			<ResumeWorkPositions>
				{resumeData.experience.map(workPosition => (
					<ResumeWorkPosition>
						<ResumeWorkPositionTitle>
							{workPosition.position} @ {workPosition.place}
							<ResumeDate>
								{workPosition.dateStart}-{workPosition.dateEnd}
							</ResumeDate>
						</ResumeWorkPositionTitle>
						<ResumeWorkProjects>
							{workPosition.projects.map(project => (
								<ResumeWorkProject>
									<strong>{project.title}: </strong>
									{project.description}
								</ResumeWorkProject>
							))}
						</ResumeWorkProjects>
					</ResumeWorkPosition>
				))}
			</ResumeWorkPositions>
		</ResumeSection>
		<ResumeSection title="Given courses and talks" class="mb-8">
			<ResumeCourses>
				{resumeData.courses.map(course => (
					<ResumeCourse>
						<strong>{course.title}</strong>
						<small> @ {course.place}</small>
						<ResumeDate>{course.year}</ResumeDate>
					</ResumeCourse>
				))}
			</ResumeCourses>
		</ResumeSection>
		<ResumeSection title="Certifications">
			<ResumeCertifications>
				{resumeData.certifications.map(certification => (
					<ResumeCertification>
						<strong>{certification.title}</strong>
						<small> @ {certification.provider}</small>
						<ResumeDate>{certification.year}</ResumeDate>
					</ResumeCertification>
				))}
			</ResumeCertifications>
		</ResumeSection>
	</Fragment>
);
