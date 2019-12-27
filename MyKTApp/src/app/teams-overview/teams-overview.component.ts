import { Component, OnInit } from '@angular/core';
import { TeamDetails } from '../app.module';

@Component({
  selector: 'app-teams-overview',
  templateUrl: './teams-overview.component.html',
  styleUrls: ['./teams-overview.component.css']
})
export class TeamsOverviewComponent implements OnInit {

  teamDetails:TeamDetails[] = [
    new TeamDetails(1,'FNOL, Desktop & Utilities','FUNDU', 'Some random shit', 'data:image/png;base64,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'),
    new TeamDetails(2,'TREAT', 'TREAT', 'Some random shit', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEXsZ3j////sYnTsZ3nrW27//v/4ytDxlqHsZXbrYXLsZXf98fLrWGvvhZP74eXrXXD97O750NXynqf++fnugI3ucoH3xMnzpa399PXwjJfta3v51trufInzqrLzoav74OPrUmf2ucH1sLnvdoPqTGP0tb32wMg8D4NhAAAFFklEQVR4nO3ZW5uiIAAGYARMMI3Kakyz49b//4kLCojV7F7ptM9+78XMeEj4Qjk4hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGMfUDgjYsRCxrz236WSSikppSOWwUhbiP4xYiHfF56sW8mIEQXdH7tSqh+4Yasyai2zEQvJ6q6QaJuOWMp35l3Zi1ETrrpCYiQcxfQJJ3wWBWGCDROK5+K/r867I0zTF30+yH+qDRkVQviEwuhqoAePdiPVFRVScd6PaJRnXKksU4I819Ydkvrs9mKCmuvp330bmgundKoBMt3mmu1LFwezkW/MgXa/tjW1JslltsttnZTa7xZlUczrpuJhPfWQp/azZVEUy1miJLFXOAgizC/blxb7bnc1UUJ6jF6UlBG6thuNlNuZ/av9AG3m/amrWziA86Q/VK637hxO1Gsh0Waim9UnCSz1wE8Tu/F13hfdX2u9m6nDYnjyF3ePW0pn/e44imr7uRkX9JMTHvO2upqZ8ag8jty2/X13HTA/hReJ/V+fnvCrfUZjXeE9JeIQD85st468vZLrSV58YkLJ+oSFD5PrhMt3EQ5Ujy/qzQPtEhL5kwmTcj6f25Yp5q1T2Ib2dtM/N0Ld3ebimhx3hd2olRn+fCcTL2az8GE1CfVVl/a7irtC5oephgtBpZK2dqezHgT1AkeECfsvnbLSZmq4opLfXIvq5nB9chzVB8652vQZdUIzuJ7deFgpXcioK7Wh1AzaLmHW7WHPCU+XdZJU0u27ZinTn5JuPLgowt3KoebU3H6p39Em1L1wP+Kbxpt6Qfw6Lw0T1ttMN5kkytZxeVadXzv7OUUqew8W1D5epsHDhB838/YJ4+hxtl84t3elfVw1G6KsqBtTHn6Wwy//SMJgp3T96ouDSuwTuvfPF93/Kwn7OhPfrM9ytba7+x5S3Pycpt3+2IRL4eos2HdN2CXsWtNXP3Wzg09PuPLzTqJso5TLJ/ONdLfkWr5c4dMT3pXfx+0Yt/qVcSszf2VciIP7QjJXfz77LuFPvDq1Cec2YTgeNv3ySNnBIarSbv0uqlxwbha7xL0m0FO47mS5iYYJ3Rpfz43MhyeNmVI3OUkyKlRmKtDPvPuEvnesz2aTkXMdlafHepuKvv7LSulNxrel65JcQtemuzMVNHt5OzAqv+6J73neLGr+PiGT3TcRRyvBleLCpdJzGp8+KvTKn1fXyLMJZWPLiGb7zXpVTNmITF2iUEHeJwyGkGJ1edRu1CjMkxWuDufBWwCfMN1EA2a5OdkbN7EZDnJ6CJTv2rCffQ40pjOS+btDQUKigty6tB2fKp7xVHNd+Ns2JKJfIIZr+DY+b/6YkBH5FeyMzTp7upemQlSDeYruU98mZEGn5NWuLbLLn9uQqcFrDt2nThZQk7fStYv5cRPBXcrCmqSZGzLsd3LNfEtk63DiWjTDWZtZira3inkjYj58VWRKstr59xWnRK9ok6I0q//iOFiq6lbkh5kPUu5u4dOktg93qJhtK7v+6B84wb/8s7hs2Mu79XGlqkruu93ucjyo9sZkHZIOHhe98hW8O/PR7AkX7Tl9hO7QPal4KuwLfj+46z8V3V/bj+ZKTf9v4ZTqMU4pmf61FzdnGrZ52esh2rZPO3cZ3OSCmONcyZ/9pzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/oN0T7QnjtEOy8AAAAAElFTkSuQmCC'),
    new TeamDetails(3, 'Data Information & Delivery', 'DID','Bull shit',''),
    new TeamDetails(1,'FNOL, Desktop & Utilities','TESTING', 'Some random shit', 'data:image/png;base64,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'),
    new TeamDetails(2,'TREAT', 'CSS', 'Some random shit', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEXsZ3j////sYnTsZ3nrW27//v/4ytDxlqHsZXbrYXLsZXf98fLrWGvvhZP74eXrXXD97O750NXynqf++fnugI3ucoH3xMnzpa399PXwjJfta3v51trufInzqrLzoav74OPrUmf2ucH1sLnvdoPqTGP0tb32wMg8D4NhAAAFFklEQVR4nO3ZW5uiIAAGYARMMI3Kakyz49b//4kLCojV7F7ptM9+78XMeEj4Qjk4hAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPGMfUDgjYsRCxrz236WSSikppSOWwUhbiP4xYiHfF56sW8mIEQXdH7tSqh+4Yasyai2zEQvJ6q6QaJuOWMp35l3Zi1ETrrpCYiQcxfQJJ3wWBWGCDROK5+K/r867I0zTF30+yH+qDRkVQviEwuhqoAePdiPVFRVScd6PaJRnXKksU4I819Ydkvrs9mKCmuvp330bmgundKoBMt3mmu1LFwezkW/MgXa/tjW1JslltsttnZTa7xZlUczrpuJhPfWQp/azZVEUy1miJLFXOAgizC/blxb7bnc1UUJ6jF6UlBG6thuNlNuZ/av9AG3m/amrWziA86Q/VK637hxO1Gsh0Waim9UnCSz1wE8Tu/F13hfdX2u9m6nDYnjyF3ePW0pn/e44imr7uRkX9JMTHvO2upqZ8ag8jty2/X13HTA/hReJ/V+fnvCrfUZjXeE9JeIQD85st468vZLrSV58YkLJ+oSFD5PrhMt3EQ5Ujy/qzQPtEhL5kwmTcj6f25Yp5q1T2Ib2dtM/N0Ld3ebimhx3hd2olRn+fCcTL2az8GE1CfVVl/a7irtC5oephgtBpZK2dqezHgT1AkeECfsvnbLSZmq4opLfXIvq5nB9chzVB8652vQZdUIzuJ7deFgpXcioK7Wh1AzaLmHW7WHPCU+XdZJU0u27ZinTn5JuPLgowt3KoebU3H6p39Em1L1wP+Kbxpt6Qfw6Lw0T1ttMN5kkytZxeVadXzv7OUUqew8W1D5epsHDhB838/YJ4+hxtl84t3elfVw1G6KsqBtTHn6Wwy//SMJgp3T96ouDSuwTuvfPF93/Kwn7OhPfrM9ytba7+x5S3Pycpt3+2IRL4eos2HdN2CXsWtNXP3Wzg09PuPLzTqJso5TLJ/ONdLfkWr5c4dMT3pXfx+0Yt/qVcSszf2VciIP7QjJXfz77LuFPvDq1Cec2YTgeNv3ySNnBIarSbv0uqlxwbha7xL0m0FO47mS5iYYJ3Rpfz43MhyeNmVI3OUkyKlRmKtDPvPuEvnesz2aTkXMdlafHepuKvv7LSulNxrel65JcQtemuzMVNHt5OzAqv+6J73neLGr+PiGT3TcRRyvBleLCpdJzGp8+KvTKn1fXyLMJZWPLiGb7zXpVTNmITF2iUEHeJwyGkGJ1edRu1CjMkxWuDufBWwCfMN1EA2a5OdkbN7EZDnJ6CJTv2rCffQ40pjOS+btDQUKigty6tB2fKp7xVHNd+Ns2JKJfIIZr+DY+b/6YkBH5FeyMzTp7upemQlSDeYruU98mZEGn5NWuLbLLn9uQqcFrDt2nThZQk7fStYv5cRPBXcrCmqSZGzLsd3LNfEtk63DiWjTDWZtZira3inkjYj58VWRKstr59xWnRK9ok6I0q//iOFiq6lbkh5kPUu5u4dOktg93qJhtK7v+6B84wb/8s7hs2Mu79XGlqkruu93ucjyo9sZkHZIOHhe98hW8O/PR7AkX7Tl9hO7QPal4KuwLfj+46z8V3V/bj+ZKTf9v4ZTqMU4pmf61FzdnGrZ52esh2rZPO3cZ3OSCmONcyZ/9pzcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwH/oN0T7QnjtEOy8AAAAAElFTkSuQmCC')
  ];
  constructor() { }

  ngOnInit() {
  }
  
}
