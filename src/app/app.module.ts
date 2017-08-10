import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';
import { ComposeComponent } from './compose/compose.component';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    InboxComponent,
    OutboxComponent,
    ComposeComponent,
    SideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:"log",
        component: MainComponent
      },
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"inbox",
        component: InboxComponent
      },
      {
        path:"outbox",
        component: OutboxComponent
      },
      {
        path:"compose",
        component: ComposeComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
