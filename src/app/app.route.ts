import { SavesComponent } from './components/saves/saves.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'post/:id', component: PostComponent},
    {path: 'saves', component: SavesComponent}
];

export const AppRouterModule = RouterModule.forRoot(appRoutes);
