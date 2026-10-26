import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { email } from '@angular/forms/signals';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';


@Component({
  imports: [MatStepperModule, ReactiveFormsModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatFormFieldModule,  MatFormFieldModule,
    MatInputModule, MatIconModule, MatSelectModule
  ],
  selector: 'app-job-application-component',
  styleUrl: './job-application-component.css',
  templateUrl: './job-application-component.html',
})
export class JobApplicationComponent {
  private fb: FormBuilder = inject(FormBuilder);

  personalInfoForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required]
  });

  professionalDetailsForm: FormGroup = this.fb.group({
    currentRole: ['', Validators.required],
    experience: ['', Validators.required],
    skills: [[], Validators.required]
  });

  jobPreferencesForm: FormGroup = this.fb.group({
    position: ['', Validators.required]
  });

  reviewForm: FormGroup = this.fb.group({
    confirm: ['', Validators.required]
  });

  clearField(contrlName: string): void{
    this.personalInfoForm.get(contrlName)?.reset();
  }

  roles: string[] = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'DevOps Engineer',
    'QA Engineer',
    'UI/UX Designer'
  ];

  experienceLevels: string[] = [
    'Less than 1 years',
    '1 to 3 years',
    '2 to 5 years',
    '5 to 10 years',
    'More than 10 years'
  ];

  skillsGroups: any = [
    {
      category: 'Frontend',
      skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue', 'HTML', 'CSS']
    },
    {
      category: 'Backeend',
      skills: ['Node.js', 'Java', 'Python', '.NET', 'GO', 'PHP']
    },
    {
      category: 'Database',
      skills: ['MySQL', 'PostgresSQL', 'MongoDB', 'Redis', 'SQL Server']
    }
  ];

}
