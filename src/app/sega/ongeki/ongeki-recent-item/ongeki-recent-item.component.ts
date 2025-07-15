import {Component, OnInit} from '@angular/core';
import {PlayerPlaylog} from '../model/PlayerPlaylog';
import {AttributeType, BattleRank, Difficulty, TechnicalRank} from '../model/OngekiEnums';
import {environment} from '../../../../environments/environment';
import {NgbModal, NgbOffcanvas} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {OngekiMusic} from '../model/OngekiMusic';
import {OngekiSongScoreRankingComponent} from '../ongeki-song-score-ranking/ongeki-song-score-ranking.component';

@Component({
  selector: 'app-ongeki-recent-item',
  templateUrl: './ongeki-recent-item.component.html',
  styleUrls: ['./ongeki-recent-item.component.css'],
  inputs: ['playLog']
})
export class OngekiRecentItemComponent implements OnInit {
  playLog: PlayerPlaylog;
  host = environment.assetsHost;
  difficulty = Difficulty;
  battleRank = BattleRank;
  technicalRank = TechnicalRank;
  attributeType = AttributeType;
  isCollapsed = false;
  protected readonly Difficulty = Difficulty;
  protected readonly Math = Math;

  constructor(
    private modalService: NgbModal,
    public router: Router,
    private offcanvasService: NgbOffcanvas,
  ) { }

  ngOnInit(): void {
  }
  open(content) {
    this.modalService.open(content, {  centered: true  });
  }

  showDetail(music: OngekiMusic) {
    const offcanvasRef = this.offcanvasService.open(OngekiSongScoreRankingComponent, {
      position: 'end',
      scroll: false,
    });
    offcanvasRef.componentInstance.music = music;
  }

  getArrayFromNumber(n: number): any[] {
    return new Array(n);
  }
}
