import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from './chandini/enroll/enroll.component';
import { TopicPageComponent } from './chandini/topic-page/topic-page.component';

const routes: Routes = [
  {
    path: 'enroll',
    component: EnrollComponent
  },
  {
    path: 'app-topic-page',
    component: TopicPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
