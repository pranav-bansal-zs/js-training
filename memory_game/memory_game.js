const arr_images = ['memory_1.gif','memory_2.gif','memory_3.gif','memory_4.gif','memory_5.gif','memory_6.gif',
    'memory_7.gif','memory_8.gif',];
const gamecontainer =document.querySelector('.game');
const resetbutton=document.querySelector('.reset');
    
    const maxmoves=20; 
    
    let moves=0;
    let matchedpairs=0; 
    const totalpairs=arr_images.length;
    
    const moves_display = document.createElement('p');
    const result_display = document.createElement('p');

    document.body.insertBefore(moves_display, gamecontainer);
    document.body.insertBefore(result_display, resetbutton);
    
    function shuffleimages() {
      const final_images =[...arr_images,...arr_images]; 
      for (let i =final_images.length-1;i>0;i--) {
        const j=Math.floor(Math.random()*(i+1));
        [final_images[i],final_images[j]] =[final_images[j],final_images[i]];
      }
      return final_images;
    }
      function gameboard() {
      const shuffledimages = shuffleimages();
      gamecontainer.innerHTML = '';
      shuffledimages.forEach((image) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;
    
        const cardinner = document.createElement('div');
        cardinner.className = 'card_inner';
        const cardfront = document.createElement('div');
        cardfront.className = 'card_front';
        const cardback = document.createElement('div');
        cardback.className = 'card_back';
        cardback.style.backgroundImage = `url(${image})`;

        cardinner.appendChild(cardfront);
        cardinner.appendChild(cardback);
        card.appendChild(cardinner);
        gamecontainer.appendChild(card);
      });
    }
    let firstcard=null;
    let secondcard=null;
    let lockboard=false;
    
    function handlecardclick(e) {
      if (lockboard) return; 
      const card = e.currentTarget;
  
      if (card.classList.contains('flipped')) return;
    
      card.classList.add('flipped');
    
      if (!firstcard) {
        firstcard = card; 
      } else {
        secondcard = card;
        moves++;
        updatemoves(); 
        checkformatch();
      }
    }
    
    function checkformatch() {
      const ismatch = firstcard.dataset.image === secondcard.dataset.image;
      if (ismatch) {
        matchedpairs++;
        firstcard.classList.add("hide");    
        secondcard.classList.add("hide"); 
        resetcards(true);
        if (matchedpairs === totalpairs) {
          showresult('You win! 🎉');
        }
      } else {
        lockboard = true;
        setTimeout(() => resetcards(false), 1000);
      }
    
      if (moves >= maxmoves && matchedpairs < totalpairs) {
        showresult('Game Over! You ran out of moves. 😢');
        lockgame();
      }
    }
    
    function resetcards(ismatch) {
      if (!ismatch) {
        firstcard.classList.remove('flipped');
        secondcard.classList.remove('flipped');
      }
      firstcard = null;
      secondcard = null;
      lockboard = false;
    }
    
    function updatemoves() {
      moves_display.textContent = `Moves: ${moves}/${maxmoves}`;
    }
    
    function showresult(message) {
      result_display.textContent = message;
      result_display.style.fontWeight = 'bold';
    }
    
    function lockgame() {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => card.removeEventListener('click', handlecardclick));
    }
    resetbutton.addEventListener('click', () => {
      moves = 0;
      matchedpairs = 0;
      updatemoves();
      result_display.textContent = '';
      gameboard();
      addCardEventListeners();
    });
    
    function addCardEventListeners() {
      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => card.addEventListener('click', handlecardclick));
    }

    gameboard();
    addCardEventListeners();
    updatemoves();
    