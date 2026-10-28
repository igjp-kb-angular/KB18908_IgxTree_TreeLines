import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IgxIconComponent } from '@infragistics/igniteui-angular/icon';
import { IGX_TREE_DIRECTIVES } from '@infragistics/igniteui-angular/tree';

interface TreeItem {
  id: string;
  label: string;
  children?: TreeItem[];
}

@Component({
  imports: [RouterOutlet, IGX_TREE_DIRECTIVES, IgxIconComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly treeData: TreeItem[] = [
    {
      id: 'documents',
      label: 'Documents',
      children: [
        { id: 'resume', label: 'Resume.docx' },
        { id: 'budget', label: 'Budget.xlsx' },
      ],
    },
    {
      id: 'pictures',
      label: 'Pictures',
      children: [
        { id: 'vacation', label: 'Vacation.png' },
        { id: 'family', label: 'Family.jpg' },
      ],
    },
    {
      id: 'music',
      label: 'Music',
      children: [{ id: 'playlist', label: 'Playlist.m3u' }],
    },
  ];
}
