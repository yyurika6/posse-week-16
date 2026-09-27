import { useState } from 'react';

// 恋愛運のパターン
const luckLevels = ['大吉', '中吉', '小吉', '吉', '末吉', '凶'];

// 今日の一言のパターン
const messages = [
  '今日は素直な気持ちを伝えると◎',
  '笑顔でいると自然と縁が近づく日',
  '焦らずマイペースが吉',
  '相手の話をよく聞くと発見あり',
  'ちょっとした勇気が未来を変える',
  '第一印象が良くなる一日',
  '思い出の場所に運が宿るかも',
];

// ラッキーアイテムのパターン
const items = [
  'ハンカチ',
  'イヤホン',
  '青いペン',
  '手帳',
  'コーヒー',
  '折り紙',
  'キーホルダー',
];

// 配列からランダムに1つ選ぶ小さなヘルパー関数
// Math.random()は0以上1未満の小数を返すので、
// 配列の長さを掛けてMath.floorで整数に切り捨てると
// 「0〜(配列の要素数-1)」のランダムな添字が得られる
function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default function App() {
  // 4つの状態（おみくじを引くたびに更新する値）
  const [hasDrawn, setHasDrawn] = useState(false); // まだ引いていないかどうか
  const [luck, setLuck] = useState('');
  const [message, setMessage] = useState('');
  const [item, setItem] = useState('');

  // ボタンが押されたときの処理
  // 3つの配列からそれぞれ独立にランダム選択することで、
  // 「押すたびに違う組み合わせ」が生まれる
  const handleDraw = () => {
    setLuck(pickRandom(luckLevels));
    setMessage(pickRandom(messages));
    setItem(pickRandom(items));
    setHasDrawn(true);
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">
          恋みくじ 💗
        </h1>

        {hasDrawn ? (
          <div className="space-y-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">恋愛運</p>
              <p className="text-3xl font-bold text-pink-500">{luck}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">今日の一言</p>
              <p className="text-base text-gray-700">{message}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">ラッキーアイテム</p>
              <p className="text-base text-gray-700">{item}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 mb-6">
            ボタンを押して今日の運勢をチェック
          </p>
        )}

        <button
          onClick={handleDraw}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-colors"
        >
          {hasDrawn ? 'もう一度引く' : 'おみくじを引く'}
        </button>
      </div>
    </div>
  );
}