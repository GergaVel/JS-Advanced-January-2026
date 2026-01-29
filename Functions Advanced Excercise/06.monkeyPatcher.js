function solution(action) {
    let result;

    switch(action){
        case "upvote": this.upvotes++; break;
        case "downvote": this.downvotes++; break;
        case "score": result = getScore.call(this); break;
    }

    function getScore() {
        let positiveVote = this.upvotes;
        let negativeVotes = this.downvotes;
        let total = positiveVote + negativeVotes;
        let score = positiveVote - negativeVotes;

        if (total > 50){
            let extraValue = Math.ceil(Math.max(positiveVote, negativeVotes) * 0.25);
            positiveVote += extraValue;
            negativeVotes += extraValue;
        }

        let rating = 'new';

        if (total < 10){ 
            rating = 'new';
        } else if (this.upvotes > total * 0.66){
            rating = 'hot';
        } else if (score >= 0 && total > 100){
            rating = 'controversial';
        } else if (score < 0) {
            rating = 'unpopular';
        }

        return [positiveVote, negativeVotes, score, rating];
    }

    return result;
}
   let post = { 
        id: '3',
        author: 'emil',
        content: 'wazaaaaa',
        upvotes: 100,
        downvotes: 100
    };

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
