import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { Game9Component } from '../../game9/game9.component';
import { Game90Component } from '../../game90/game90.component';
import { Game125Component } from '../../game125/game125.component';
import { Game1000Component } from '../../game1000/game1000.component';
import { Game10000Component } from '../../game10000/game10000.component';
import { SendMessageComponent } from '../../sendmessage/send-message.component';
import { ResultComponent } from '../../result/result.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    Game9Component,
    Game90Component,
    Game125Component,
    Game1000Component,
    Game10000Component,
    SendMessageComponent,
    ResultComponent,
    
  ]
})

export class AdminLayoutModule {}
