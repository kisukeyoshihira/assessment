'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided =document.getElementById('tweet-area');

/**
 * 指定した要素の子供をすべて削除する
 * @param{HTMLElement} element HTMLの要素
 */
function removeAllChildren(element){ 
    while(element.firstChild){//子供の要素がある限り削除
        element.removeChild(element.firstChild);
    }
}
assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0){ //名前が空の時は処理を終了する
    return;
}
}
    //診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
    
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    //TODO　ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
    anchor.setAttibute('href', hrefValue);
    anchor.classsName = 'twitter-hashtag-button';
    anchor.setAttribute('data-text',result);
    anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);

const answers=[
    '{userName}のいいところは声です。{userName}の特徴的な声は皆をひきつけます。',
    '{userName}のいいところは顔です。{userName}の特徴的な顔は皆をひきつけます。',
    '{userName}のいいところは手です。{userName}の特徴的な手は皆をひきつけます。',
    '{userName}のいいところは匂いです。{userName}の特徴的な匂いは皆をひきつけます。',
    '{userName}のいいところは目です。{userName}の特徴的な目は皆をひきつけます。',
    '{userName}のいいところは気前です。{userName}の男前な気質は皆をひきつけます。',
    '{userName}のいいところは親です。{userName}の七光りと金は皆をひきつけます。',

];
/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName){
    //文字コードの番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i = 0; i <userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    //文字コードの番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];
    result = result.replace(/\{userName\}/g, userName);
    return result;
}
