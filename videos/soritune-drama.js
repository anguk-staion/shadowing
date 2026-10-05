/* 주아쌤_소리튠영어 — 미드/영화 최다 출현 문장 500장면 (교안: 소리튠 미드·영화 최다 출현 문장 100) */
window.VIDEO=(function(){
/* 문장 || 뜻,  " / " = 소리블록(끊어 읽는 단위). 교안엔 챕터가 없어 10문장씩 묶음 */
const RAW = `
## Sentences 1–10|문장 1–10
That's / one way / to put it. || 그렇게 말할 수도 있겠네.
I think / I'm going to / be sick. || 나 토할 것 같아.
I don't know / what she's / talking about. || 그녀가 무슨 말을 하는지 모르겠어.
I'm going to / call the cops. || 경찰 부를 거야.
I didn't get / much sleep / last night. || 어젯밤에 잠을 거의 못 잤어.
Have you ever seen / anything / like this? || 이런 거 본 적 있어?
We've known / each other / a long time. || 우린 오래 알고 지냈지.
I've got / a bad feeling / about this. || 이거 느낌이 안 좋아.
I think / it's a good thing. || 그건 좋은 일이라고 생각해.
I don't care / what anybody / says. || 누가 뭐라 하든 상관없어.
## Sentences 11–20|문장 11–20
He didn't / come home / last night. || 그는 어젯밤 집에 안 왔어.
Oh, / it's a long story. || 아, 그건 긴 이야기야.
I'm running / a little late. || 조금 늦을 것 같아.
Okay, / I'll see you / tomorrow. || 좋아, 내일 봐.
Well, / I'm glad / to hear that. || 그 말 들으니 기쁘네.
It's gonna be / so much fun. || 정말 재미있을 거야.
I'm getting married / tomorrow. || 나 내일 결혼해. (당장 내일이 결혼식이야.)
I've done / nothing wrong. || 난 아무 잘못도 안 했어.
I'm going / back to work. || 다시 일하러 갈게.
I don't want you / to say / anything. || 아무 말도 하지 마.
## Sentences 21–30|문장 21–30
I need to / get back / to work. || 일로 돌아가야 해.
I think / you've done / enough. || 넌 충분히 했어.
Right, / you're right, / I'm sorry. || 맞아, 네가 맞아. 미안해.
There's something / I want / to ask you. || 너한테 물어보고 싶은 게 있어.
I think / you're making / a mistake. || 너 실수하고 있는 것 같아.
If it'll / make you / feel better. || 그게 네 기분을 좀 낫게 해준다면.
I didn't think / you'd mind. || 네가 신경 안 쓸 줄 알았어.
I think / I know / what's going on. || 무슨 일이 일어나고 있는지 알겠어.
Well, / I hope / you're right. || 그래, 네가 맞길 바래.
I'm going to / take care of it. || 내가 처리할게.
## Sentences 31–40|문장 31–40
Well, / let me put it / this way. || 글쎄, 이렇게 말해볼게.
I'll tell you / one thing, / though. || 하지만 한 가지는 말할게.
You seem like / a nice guy. || 넌 좋은 사람 같아.
Let me put it / another way. || 다르게 말해볼게.
You'll feel / much better. || 훨씬 기분이 나아질 거야. (몸이 좀 개운해질 거야.)
All right, / let's get going. || 좋아, 출발하자.
It's going to be / a long night. || 오늘 밤은 길겠네. (오늘 밤은 고생 좀 하겠는걸.)
As I'm sure / you're aware… || 이미 알고 있겠지만…
I'm going to / ask you / a question. || 질문 하나 할게.
You're acting / like a child. || 너 어린애처럼 굴고 있어.
## Sentences 41–50|문장 41–50
I'm glad / you're feeling / better. || 기분이 나아졌다니 다행이야.
I'm calling / nine one one. || 119(911)에 전화할게.
That's the most / ridiculous thing / I've ever heard. || 그건 내가 들어본 것 중에 제일 어이없어.
You're my best friend / in the whole world. || 넌 세상에서 가장 친한 친구야.
May I ask / who's calling? || 누가 전화하셨는지 여쭤봐도 될까요?
Don't believe / everything / you read. || 읽는 걸 다 믿지 마. (기사나 인터넷에 나오는 말 다 믿지 마.)
You don't know / who you're dealing with, / do you? || 누구랑 상대하는 건지 몰랐지, 그렇지? (너 지금 상대를 잘못 골랐어.)
I don't know / what to believe / anymore. || 이젠 뭘 믿어야 할지 모르겠어.
I'm going to / get some air. || 잠깐 바람 좀 쐬고 올게.
I've never seen you / like this / before. || 너 이런 모습 처음 봐. (놀람, 당황, 걱정 등)
## Sentences 51–60|문장 51–60
I don't want / to see / your face. || 너 얼굴 보기 싫어. (꼴도 보기 싫어.)
Let's get / the show / on the road. || 이제 시작하자! (슬슬 출발하자.)
She doesn't know / what she's / talking about. || 그녀는 자기가 무슨 말 하는지도 몰라.
I'll see you / soon, / okay? || 곧 보자, 알겠지?
We'll come back / later. || 나중에 다시 올게.
That's the dumbest thing / I've ever heard. || 그건 내가 들은 것 중 제일 멍청한 소리야.
You never know / what's gonna / happen. || 무슨 일이 일어날지 모르는 거야.
We've been friends / for a long time. || 우린 오래된 친구잖아.
That's what / I'm trying / to figure out. || 그걸 알아내려고 하는 중이야.
I'm sure / he'll be fine. || 그는 분명 괜찮을 거야.
## Sentences 61–70|문장 61–70
Oh, / it's quite / all right. || 아, 괜찮아요.
It's a / brand new day. || 새로운 하루야. (새로운 시작이야.)
It'll be / like old times. || 옛날 같을 거야.
Just like / old times, / huh? || 예전 같네, 그치?
We're going / the wrong way. || 우리 길을 잘못 가고 있어.
Come on, / I'll take you / home. || 자, 내가 집에 데려다줄게.
I'll show you / how it's done. || 어떻게 하는 건지 보여줄게.
We could really / use your help. || 당신 도움이 정말 필요해요.
I think / you're gonna / like it. || 그거 마음에 들 거야.
I've got / everything / under control. || 모든 건 내 통제 아래 있어.
## Sentences 71–80|문장 71–80
Let me tell you / a little story. || 이야기 하나 들려줄게.
You can't always / get what / you want. || 원하는 걸 항상 얻을 수는 없어. (세상일이 다 네 뜻대로 될 순 없어.)
Let's go / somewhere else. || 다른 데로 가자.
I got to / get back / to work. || 일하러 돌아가야 해.
I don't have / anywhere else / to go. || 갈 데가 없어.
You've got to / help us. || 우리 좀 도와줘야 해.
There's something / strange / going on here. || 여기 뭔가 이상한 일이 벌어지고 있어.
Everyone deserves / a second chance. || 모든 사람은 두 번째 기회를 받을 자격이 있어. (한 번의 실수로 판단하지 말자.)
I knew / you'd come around. || 네가 결국 돌아올 줄 알았어. (결국 마음을 돌릴 줄 알았어.)
I'm sure / you'll understand. || 넌 분명 이해할 거야.
## Sentences 81–90|문장 81–90
Well, / that was / a long time ago. || 그건 아주 오래전 일이야.
Please give me / another chance. || 다시 한 번만 기회를 줘.
I'm gonna ask you / one last time. || 마지막으로 한 번만 더 물어볼게.
Let me know / if you hear / anything. || 뭐 들리면 알려줘.
Don't spend it all / in one place. || 한곳에 다 써버리지 마. (한 번에 다 탕진하지 마라.)
I'm sure / that's not true. || 그건 사실이 아닐 거야.
I'm gonna / get some sleep. || 이제 좀 자야겠다.
Hey, / I've got / an idea. || 이봐, 좋은 생각이 있어.
I knew / this day / would come. || 이 날이 올 줄 알았어.
I'm sorry / things didn't / work out. || 일이 잘 안 돼서 미안해.
## Sentences 91–100|문장 91–100
I'm gonna go / get a drink. || 한잔하러 갈게.
What's the worst thing / that could happen? || 최악의 경우라 해봐야 뭐겠어?
I don't even know / what's going on. || 지금 무슨 일이 일어나고 있는지도 모르겠어.
We go back / a long way. || 우리 오래전부터 알고 지냈잖아.
I've never seen him / like this. || 그가 이런 모습인 건 처음 봐.
I don't want / to see / anybody. || 아무도 만나고 싶지 않아.
Hey, / what's the / big idea? || 이게 대체 무슨 짓이야? (야, 지금 뭐 하자는 거야?)
You're not gonna / say anything? || 아무 말도 안 할 거야?
All right, / I'll talk to you / later. || 좋아, 나중에 이야기하자.
That's / one way / to put it. || 그렇게 말할 수도 있겠네.
`;

/* 문장별 영상 시작 시간(초) — 그 문장의 첫 장면이 나오는 지점 (영상은 문장마다 장면 약 5개를 이어 붙인 구성) */
const TIMES=[27, 56.5, 90, 118, 137, 175, 208, 241, 279, 310,
 340, 375, 405, 430, 467, 496, 526, 557, 585, 614,
 642, 675, 704, 732, 773, 800, 833, 862, 897, 928,
 956, 988, 1015, 1045, 1074, 1100, 1134, 1161, 1189, 1224,
 1253, 1284, 1320, 1354, 1394, 1422, 1458, 1497, 1526, 1552,
 1586, 1612, 1642, 1677, 1700, 1730, 1765, 1794, 1830, 1868,
 1896, 1918, 1947, 1974, 2005, 2033, 2063, 2089, 2123, 2153,
 2183, 2216, 2251.5, 2276, 2304, 2342, 2369, 2404, 2441, 2467,
 2498, 2545, 2578, 2622, 2653, 2687, 2713.5, 2742, 2777, 2803.5,
 2838, 2874, 2906, 2939, 2970, 2999, 3029, 3057, 3086, 3120];

return {RAW,TIMES};
})();
