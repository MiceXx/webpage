angular.module('app', ['ngAnimate', 'angular-inview'])
  .controller('TimelineController', function($window) {

    this.schedule = [{
      date: 'Sept 2011 ------TO------ June 2015',
      title: 'University of Waterloo',
      description: 'Bachelor of Mathematics in Operations Research',
      inview: false
    }, {
      date: 'Sept 2015 ------TO------ June 2017',
      title: 'McMaster University',
      description: 'Masters of Science in Computational Science and Engineering',
      inview: false
    },{
      date: 'Sept 2015 ------TO------ May 2017',
      title: 'McMaster University',
      description: 'Research and Teaching Assistant',
      inview: false
    },{
      date: 'May 2017 ------TO------ Present',
      title: 'TD Wealth',
      description: 'Automation Developer',
      inview: false
    }];
  
    this.year = 2017;

    this.itemInview = function(index, inview, inviewInfo, item) {
      function hasChanged() {
        return inviewInfo.changed;
      }

      if (hasChanged() && inview) {
        this.year = this.year;
      }

      this.schedule[index].inview = inview;
    };
  });