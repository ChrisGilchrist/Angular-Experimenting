import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, Subscription, timer } from 'rxjs';

export enum Difficulty {
  EASY,
  MEDIUM,
  HARD
}

export class Target {
  x: number;
  y: number;
  displayed: boolean;
  clicked: boolean;
}

@Component({
  selector: 'app-testing22',
  templateUrl: './testing22.component.html',
  styleUrls: ['./testing22.component.scss']
})
export class Testing22Component implements OnInit {

  difficulties = Difficulty;

  difficulty: Difficulty = Difficulty.EASY;
  targetCount: number = 20;
  targets: Target[] = [];

  screenWidth: number;
  screenHeight: number;

  intervalSubscription: Subscription;
  gameTimerSub: Subscription;

  currentTarget: number = 0;

  form: FormGroup;

  showMenu: boolean = true;

  gameTimer: number = 0;

  endOfGame: boolean = false;

  constructor(private fb: FormBuilder) { }

  initForm(): void {
    this.form = this.fb.group({
      'targetCount': 20,
      'difficulty': Difficulty.EASY
    });
  }

  ngOnInit(): void {

    this.initForm();

    this.screenHeight = 700;
    this.screenWidth = 700;
    console.log(this.screenHeight);
    console.log(this.screenWidth);
    this.setupGame();

    //this.startGame();
    //this.startTimer();
  }

  setupGame(): void {
    this.generateTargetLocations();
    console.log(this.targets);
  }

  startGameTimer(): void {
    const _timer = timer(0, 1000);
    this.gameTimerSub = _timer.subscribe(x => {
      this.gameTimer = x;

      // Stop timer when we get to 20 seconds
      if (this.gameTimer > 20) {
        this.gameOver();
      }
    });
  }

  generateTargetLocations(): void {
    for (let i = 0; i < this.targetCount; i++) {
      this.targets.push({
        x: this.randomIntFromInterval(0, this.screenWidth),
        y: this.randomIntFromInterval(0, this.screenHeight),
        displayed: false,
        clicked: false
      });
    }
  }

  private randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  startGame(): void {
    // Get form value
    const formValue = this.form.value;
    this.targetCount = formValue.targetCount;
    this.difficulty = formValue.difficulty;

    console.log('GAME DIFFCILUTY ', this.difficulty);
    console.log('TAGRET COUNT', this.targetCount);

    this.targets[0].displayed = true;

    this.startGameTimer();
    this.startTimer();
    this.showMenu = false;
  }


  targetClicked(target: Target, i: number): void {
    this.currentTarget = i;
    // Set clicked to true and hide the target
    target.clicked = true;
    target.displayed = false;

    this.targets[i + 1].displayed = true;

    this.restartInterval();
  }

  startTimer(): void {
    console.log('Starting Timer')
    const _interval = interval(1000);
    this.intervalSubscription = _interval.subscribe(x => {
      console.log('Current Target', this.currentTarget);
      
      if (this.currentTarget == this.targets.length) {
        this.gameOver();
        return;
      }

      this.targets[this.currentTarget].displayed = false;
      if (this.targets[this.currentTarget + 1]) {
        this.targets[this.currentTarget + 1].displayed = true;
        this.currentTarget = this.currentTarget +=1;
      }  
    });
  }

  restartInterval(): void {
    console.log('IntervalReset');
    this.intervalSubscription.unsubscribe();
    this.startTimer();
  }
  

  getScore(): number {
    return this.targets.filter(x => x.clicked).length;
  }

  gameOver(): void {
    this.gameTimerSub.unsubscribe();
    this.intervalSubscription.unsubscribe();
    this.endOfGame = true;
  }


}

