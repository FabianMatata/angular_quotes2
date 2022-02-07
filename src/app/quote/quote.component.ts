import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes:Quote[]=[
    new Quote(1,new Date(2021,1,10),"Kelly","Nelson Mandela","The greatest glory in living lies not in never falling, but in rising every time we fall.",90,12,false),
    new Quote(2,new Date(2021,3,8),"Amos","Steve Jobs","Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",70,10,false),
    new Quote(3,new Date(2021,2,9),"Kelvin","Walt Disney","The way to get started is to quit talking and begin doing.",80,8,false),
    new Quote(4,new Date(2021,4,7),"Winnie","Eleanor Roosevelt","If life were predictable it would cease to be life, and be without flavor.",60,8,false),
    new Quote(5,new Date(2021,7,4),"Laura","John Lennon","Life is what happens when you're busy making other plans. ",30,5,false),
    new Quote(6,new Date(2021,6,5),"Cherry","James Cameron","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",40,7,false),
    new Quote(7,new Date(2021,5,6),"Faith","Oprah Winfrey","If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",50,4,false),
    new Quote(8,new Date(2021,8,3),"Fabian","Mother Teresa","Spread love everywhere you go. Let no one ever come to you without leaving happier.",20,2,false),
    new Quote(9,new Date(2021,9,2),"Reen","Franklin D. Roosevelt","When you reach the end of your rope, tie a knot in it and hang on. ",10,1,false),
    new Quote(10,new Date(2021,10,1),"Justine","Margaret Mead","Always remember that you are absolutely unique. Just like everyone else. ",70,8,false),
  ];

  populars:Quote[]=[
    // new Quote(1,new Date(2021,3,23),"Lucky","Robert Louis Stevenson","Don't judge each day by the harvest you reap but by the seeds that you plant. ",40,10,false),
    // new Quote(2,new Date(2021,7,12),"Sharon","Benjamin Franklin","Tell me and I forget. Teach me and I remember. Involve me and I learn.",30,3,false),  
];


  addNewQuote(quote){
    let quotesLength=this.quotes.length+1;

    let quoteObj=new Quote(quotesLength,new Date,quote.userName,quote.author,quote.quote,0,0,false);

    this.quotes.push(quoteObj);
  }
  toggleDetails(index){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  deleteQuote(isDeleted,index){

    if(isDeleted){
      let remove=confirm(`Are you sure you wish to delete this ${this.quotes[index].quote}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index){
      var up=this.quotes[index].upvote+1;
      this.quotes[index].upvote=up;
      
  }

  
  downvoteFunc(index){
    var down=this.quotes[index].downvote+1;
    this.quotes[index].downvote=down;
  
}

mostPopular(){

  
  this.populars.splice(0,this.populars.length);

  var largest=this.quotes[0].upvote;
  var number=null;
  for (var i=0;i<this.quotes.length;i++){
    number=this.quotes[i].upvote

    largest=Math.max(largest,number)
  }
  
  for (var i=0;i<this.quotes.length;i++){
    
    if(this.quotes[i].upvote===largest){
      this.populars.push(this.quotes[i]);
    }
  }

}
  constructor() { }

  ngOnInit(): void {
  }

}
