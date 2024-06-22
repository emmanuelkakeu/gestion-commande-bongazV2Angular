import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../../services/articles-service';
import { ArticleDto } from '../../../../gCmmd-api/src/models/article-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent {
  articleForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private articleService: ArticleService, private router: Router,) {
    this.articleForm = this.fb.group({
      codeArticle: ['', Validators.required],
      designation: ['', Validators.required],
      prixUnitaireHt: ['', Validators.required],
      tauxTva: ['', Validators.required],
      prixUnitaireTtc: ['', Validators.required],
      imageFileName: [''],
      supplierId: [null],
      gasRetailerId: [null]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.articleForm.valid && this.selectedFile) {
      const article: ArticleDto = this.articleForm.value;
      const observer = {
        next: (response: ArticleDto) => {
          console.log('Article created successfully', response);
        },
        error: (error: any) => {
          console.error('Error creating article', error);
        },
        complete: () => {
          console.log('Request completed');
        }
      };
      this.articleService.createArticle(article, this.selectedFile).subscribe(observer);
    }
    this.router.navigate(['articles']);
  }
}
