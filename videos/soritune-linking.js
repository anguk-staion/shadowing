/* 주아쌤_소리튠영어 — 축약 발음 훈련 몰아보기 (교안: 소리튠 영어 축약·연음 80표현) */
window.VIDEO=(function(){
/* 표현 || 이렇게 들려요(한글 근사 표기),  "> 1: " ~ "> 3: " = 예문 3개 */
const RAW = `
## A. Be / Do questions|Be동사 / Do동사 의문문
Is this || 이렇게 들려요 · 이지스
> 1: *Is this* real? || 이거 진짜야?
> 2: *Is this* yours? || 이거 네 거야?
> 3: *Is this* okay? || 이거 괜찮아?
Is that || 이렇게 들려요 · 쌧 / 이잿
> 1: *Is that* your phone? || 저거 네 폰이야?
> 2: *Is that* true? || 그거 진짜야?
> 3: *Is that* everything? || 그게 전부야?
Is that a || 이렇게 들려요 · 이재러
> 1: *Is that a* problem? || 그게 문제야?
> 2: *Is that a* joke? || 그거 농담이야?
> 3: *Is that a* good thing? || 그거 좋은 거야?
Is that what I || 이렇게 들려요 · 싸워라이
> 1: *Is that what I* need? || 그게 내가 필요한 거야?
> 2: *Is that what I* said? || 그게 내가 말한 거야?
> 3: *Is that what I* think it is? || 내가 생각하는 게 그거 맞아?
Is there || 이렇게 들려요 · 이제어
> 1: *Is there* a deadline? || 마감 기한이 있나요?
> 2: *Is there* a problem? || 무슨 문제 있어?
> 3: *Is there* anyone home? || 집에 누구 있어?
Is there any || 이렇게 들려요 · 세기어니 / 쎄어니
> 1: *Is there any* water left? || 물 좀 남았어?
> 2: *Is there any* food? || 먹을 것 좀 있어?
> 3: *Is there any* problem? || 무슨 문제 있어?
Is your || 이렇게 들려요 · 이쥐여
> 1: *Is your* phone on silent? || 네 폰 진동이야?
> 2: *Is your* mom home? || 어머니 집에 계셔?
> 3: *Is your* car working? || 네 차 잘 가?
Is he || 이렇게 들려요 · 씨
> 1: *Is he* home? || 그 사람 집에 있어?
> 2: *Is he* your friend? || 그 사람 네 친구야?
> 3: *Is he* coming tonight? || 그 사람 오늘 밤에 와?
Was there || 이렇게 들려요 · 우제어
> 1: *Was there* a woman involved? || 거기에 여자가 관련돼 있나요?
> 2: *Was there* a trouble? || 무슨 문제라도 있었어?
> 3: *Was there* anyone else? || 다른 사람도 있었어?
Does this || 이렇게 들려요 · 디지스
> 1: *Does this* work? || 이거 작동돼?
> 2: *Does this* make sense? || 이게 말이 돼?
> 3: *Does this* belong to you? || 이거 네 거야?
Does your || 이렇게 들려요 · 더쥐여
> 1: *Does your* stomach hurt? || 배 아파?
> 2: *Does your* back hurt? || 허리 아파?
> 3: *Does your* head hurt? || 머리 아파?
Did she || 이렇게 들려요 · 쥐
> 1: *Did she* tell you? || 그녀가 너한테 말해줬어?
> 2: *Did she* call you? || 그녀가 너한테 전화했어?
> 3: *Did she* leave? || 그녀 떠났어?
Do you have any || 이렇게 들려요 · 듀브니
> 1: *Do you have any* plans? || 너 무슨 계획 있어?
> 2: *Do you have any* questions? || 질문 있으신가요?
> 3: *Do you have any* idea? || 너 알고는 있어?
Do you want any || 이렇게 들려요 · 듀워니
> 1: *Do you want any* more coffee? || 커피 더 마실래?
> 2: *Do you want any* help? || 도움 필요해?
> 3: *Do you want any* advice? || 조언 좀 해줄까?
You mind if I || 이렇게 들려요 · 유만어바이
> 1: *You mind if I* sit here? || 여기 앉아도 될까요?
> 2: *You mind if I* ask a question? || 질문 하나 해도 될까요?
> 3: *You mind if I* turn on the TV? || TV 좀 켜도 될까요?
## B. What patterns|의문사 What 패턴
What is this || 이렇게 들려요 · 와리지스
> 1: *What is this* place? || 여기 어디야?
> 2: *What is this* thing? || 이거 뭐야?
> 3: *What is this* noise? || 이게 무슨 소리야?
What does this || 이렇게 들려요 · 와르지스
> 1: *What does this* mean? || 이게 무슨 뜻이야?
> 2: *What does this* do? || 이건 뭐 하는 거야?
> 3: *What does this* have to do with you? || 이게 너랑 무슨 관련이 있어?
What's that? || 이렇게 들려요 · 우샛
> 1: *What's that* over there? || 저기 저건 뭐야?
> 2: *What's that* smell? || 이게 무슨 냄새야?
> 3: *What's that* noise? || 이게 무슨 소리야?
What is your || 이렇게 들려요 · 와리줘
> 1: *What is your* name? || 이름이 뭐야?
> 2: *What is your* plan? || 네 계획이 뭐야?
> 3: *What is your* point? || 네 말의 요점이 뭐야?
What are you || 이렇게 들려요 · 워러유
> 1: *What are you* getting at? || 무슨 말을 하려는 거야?
> 2: *What are you* waiting for? || 너 뭐 기다리고 있어?
> 3: *What are you* thinking about now? || 넌 지금 무슨 생각 해?
What do you || 이렇게 들려요 · 와루유
> 1: *What do you* mean? || 무슨 뜻이야?
> 2: *What do you* think? || 어떻게 생각해?
> 3: *What do you* want to do? || 뭐 하고 싶어?
What did I || 이렇게 들려요 · 워르라이
> 1: *What did I* say? || 내가 무슨 말 했지?
> 2: *What did I* miss? || 내가 뭐 놓친 거 있어?
> 3: *What did I* do wrong? || 내가 뭐 잘못했어?
What did he || 이렇게 들려요 · 왓디리
> 1: *What did he* say? || 그 사람이 뭐래?
> 2: *What did he* want? || 그 사람이 뭘 원했어?
> 3: *What did he* do? || 그 사람이 뭘 했어?
What was I || 이렇게 들려요 · 오으자이
> 1: *What was I* thinking? || 내가 무슨 생각을 한 거지?
> 2: *What was I* doing? || 내가 뭐 하고 있었지?
> 3: *What was I* saying? || 내가 무슨 말 하고 있었지?
What will || 이렇게 들려요 · 워를
> 1: *What will* happen next? || 다음에 무슨 일이 일어날까?
> 2: *What will* you do tomorrow? || 내일 뭐 할 거야?
> 3: *What will* it cost us? || 그게 우리한테 얼마나 들까?
## C. Why / When / Where / Who|의문사 Why / When / Where / Who
Why am I || 이렇게 들려요 · 와이마이
> 1: *Why am I* so tired? || 나 왜 이렇게 피곤하지?
> 2: *Why am I* here? || 내가 여기 왜 있지?
> 3: *Why am I* always late? || 난 왜 맨날 늦지?
Why are you || 이렇게 들려요 · 와이유
> 1: *Why are you* so late? || 너 왜 이렇게 늦었어?
> 2: *Why are you* doing this? || 너 왜 이러는 거야?
> 3: *Why are you* so quiet? || 너 왜 이렇게 조용해?
Why do you || 이렇게 들려요 · 와리유
> 1: *Why do you* care? || 네가 왜 신경 써?
> 2: *Why do you* ask? || 왜 물어봐?
> 3: *Why do you* think so? || 왜 그렇게 생각해?
Why is he || 이렇게 들려요 · 와이지
> 1: *Why is he* so angry? || 그 사람 왜 그렇게 화났어?
> 2: *Why is he* after me? || 그 사람이 왜 나를 쫓는 걸까요?
> 3: *Why is he* staring at me? || 그 사람 왜 날 쳐다봐?
Why is your || 이렇게 들려요 · 와이쥐여
> 1: *Why is your* face like that? || 얼굴 표정이 왜 그래?
> 2: *Why is your* room so messy? || 네 방은 왜 이렇게 지저분해?
> 3: *Why is your* hands cold? || 네 손은 왜 이렇게 차가워?
Why would I || 이렇게 들려요 · 와우라이
> 1: *Why would I* lie? || 내가 왜 거짓말을 하겠어?
> 2: *Why would I* do that? || 내가 왜 그러겠어?
> 3: *Why would I* care? || 내가 왜 신경 쓰겠어?
When are you || 이렇게 들려요 · 원이유
> 1: *When are you* leaving? || 너 언제 떠나?
> 2: *When are you* coming back? || 너 언제 돌아와?
> 3: *When are you* free? || 너 언제 한가해?
When will you || 이렇게 들려요 · 웬으유
> 1: *When will you* call me? || 너 언제 전화할 거야?
> 2: *When will you* be here? || 너 언제쯤 도착해?
> 3: *When will you* arrive? || 너 언제 도착해?
Where are you || 이렇게 들려요 · 워이유
> 1: *Where are you* from? || 어디서 왔어?
> 2: *Where are you* going? || 어디 가?
> 3: *Where are you* now? || 너 지금 어디야?
Where did you || 이렇게 들려요 · 월쥬
> 1: *Where did you* find it? || 그거 어디서 찾았어?
> 2: *Where did you* get that? || 그거 어디서 났어?
> 3: *Where did you* go? || 너 어디 갔었어?
Where did it || 이렇게 들려요 · 웨르릿
> 1: *Where did it* go? || 그거 어디로 갔어?
> 2: *Where did it* come from? || 그거 어디서 난 거야?
> 3: *Where did it* happen? || 그게 어디서 일어난 거야?
Who will || 이렇게 들려요 · 훌
> 1: *Who will* go with me? || 나랑 같이 갈 사람 누구야?
> 2: *Who will* win the race? || 누가 경기에서 이길까?
> 3: *Who will* find love? || 누가 사랑을 찾을까?
## D. How patterns|의문사 How 패턴
How do you || 이렇게 들려요 · 하리유
> 1: *How do you* do that? || 그거 어떻게 해?
> 2: *How do you* know? || 너 어떻게 알아?
> 3: *How do you* feel? || 기분 어때?
How does this || 이렇게 들려요 · 하르지스
> 1: *How does this* work? || 이거 어떻게 작동해?
> 2: *How does this* look? || 이거 어때 보여?
> 3: *How does this* taste? || 이거 맛이 어때?
How did you || 이렇게 들려요 · 하우쥬
> 1: *How did you* know? || 너 어떻게 알았어?
> 2: *How did you* do that? || 너 그거 어떻게 했어?
> 3: *How did you* get here? || 너 여기 어떻게 왔어?
How did it || 이렇게 들려요 · 하르릿
> 1: *How did it* go? || 어떻게 됐어?
> 2: *How did it* happen? || 그게 어쩌다 그렇게 된 거야?
> 3: *How did it* end? || 그거 어떻게 끝났어?
How's he || 이렇게 들려요 · 하우지
> 1: *How's he* doing these days? || 그 사람 요새 어떻게 지내?
> 2: *How's he* feeling? || 그 사람 기분 어때?
> 3: *How's he* doing? || 그 사람 어떻게 지내?
How was your || 이렇게 들려요 · 하우쥬어
> 1: *How was your* weekend? || 주말 어땠어?
> 2: *How was your* day? || 오늘 하루 어땠어?
> 3: *How was your* trip? || 여행 어땠어?
## E. Modals + you|조동사 / + You 의문문
Did you see || 이렇게 들려요 · 디쥬씨
> 1: *Did you see* the news? || 너 그 뉴스 봤어?
> 2: *Did you see* my keys? || 내 열쇠 봤어?
> 3: *Did you see* him yesterday? || 어제 그 사람 봤어?
Did you eat || 이렇게 들려요 · 디쥬잇
> 1: *Did you eat* lunch? || 너 점심 먹었어?
> 2: *Did you eat* breakfast? || 너 아침 먹었어?
> 3: *Did you eat* anything yet? || 너 뭐 좀 먹었어?
Could you || 이렇게 들려요 · 쿠쥬
> 1: *Could you* help me find her? || 그녀를 찾는 데 도움을 주실 수 있나요?
> 2: *Could you* repeat that? || 다시 말해주실 수 있나요?
> 3: *Could you* open the door? || 문 좀 열어주실 수 있나요?
Would you || 이렇게 들려요 · 우쥬
> 1: *Would you* like some coffee? || 커피 좀 드시겠어요?
> 2: *Would you* mind helping me? || 저 좀 도와주실 수 있나요?
> 3: *Would you* come with me? || 나랑 같이 가실래요?
Didn't you || 이렇게 들려요 · 딘츄
> 1: *Didn't you* know that? || 너 그거 몰랐어?
> 2: *Didn't you* see that? || 너 그거 못 봤어?
> 3: *Didn't you* tell me? || 네가 나한테 말 안 했었나?
## F. Modal + have|조동사 + have 패턴
I would have || 이렇게 들려요 · 아우더
> 1: *I would have* called you. || 너한테 전화했을 거야.
> 2: *I would have* done the same. || 나라도 똑같이 했을 거야.
> 3: *I would have* come earlier. || 더 일찍 왔을 텐데.
You would have || 이렇게 들려요 · 유더
> 1: *You would have* loved it. || 너도 그거 엄청 좋아했을 거야.
> 2: *You would have* done that. || 너도 그렇게 했을 걸.
> 3: *You would have* known better. || 너라면 더 잘 알았을 텐데.
Should have || 이렇게 들려요 · 슈더
> 1: I *should have* listened to you. || 네 말을 들었어야 했는데.
> 2: You *should have* asked me. || 나한테 물어봤어야지.
> 3: We *should have* left earlier. || 우리 더 일찍 출발했어야 했어.
Shouldn't have || 이렇게 들려요 · 슈드너
> 1: I *shouldn't have* said that. || 그 말은 하지 말았어야 했는데.
> 2: You *shouldn't have* come back. || 너는 돌아와서는 안 됐어.
> 3: We *shouldn't have* waited. || 기다리지 말았어야 했어.
Could have || 이렇게 들려요 · 쿠더브
> 1: I wish I *could have* been there. || 내가 거기 있었으면 좋았을 텐데.
> 2: It *could have* been worse. || 이만하길 다행이지.
> 3: You *could have* told me. || 나한테 말해줄 수도 있었잖아.
Must have || 이렇게 들려요 · 머스터브
> 1: He *must have* forgotten his keys. || 그는 열쇠를 잊어버린 모양이야.
> 2: You *must have* been tired. || 너 정말 피곤했겠구나.
> 3: It *must have* been hard. || 정말 힘들었겠어.
Might have || 이렇게 들려요 · 마이더
> 1: I *might have* seen him before. || 전에 그를 봤을지도 몰라.
> 2: She *might have* copied mine. || 그녀가 내 것을 베꼈을 수도 있어.
> 3: It *might have* been a mistake. || 실수였을 수도 있어.
Should I have || 이렇게 들려요 · 슈라이브
> 1: *Should I have* another drink? || 한 잔 더 마셔도 될까?
> 2: *Should I have* asked first? || 내가 먼저 물어봤어야 했을까?
> 3: *Should I have* brought more? || 더 가져왔어야 했나?
## G. Statements & intentions|평서문 & 의지 표현
That's what I'm || 이렇게 들려요 · 댓츠우람
> 1: *That's what I'm* saying. || 내 말이 그 말이야.
> 2: *That's what I'm* talking about. || 내 말이 바로 그거야!
> 3: *That's what I'm* doing. || 내가 그러고 있는 중이야.
I'll have a || 이렇게 들려요 · 알러브
> 1: *I'll have a* coffee, please. || 커피 한 잔 할게요.
> 2: *I'll have a* look. || 내가 한번 볼게.
> 3: *I'll have a* try. || 한번 시도해볼게.
I'm going to || 이렇게 들려요 · 암거나
> 1: *I'm going to* go now. || 나 이제 갈 거야.
> 2: *I'm going to* miss you. || 너 보고 싶을 거야.
> 3: *I'm going to* do my best. || 최선을 다할 거야.
I don't know || 이렇게 들려요 · 아론노
> 1: *I don't know* what to do. || 뭘 해야 할지 모르겠어.
> 2: *I don't know* why. || 왜 그런지 모르겠어.
> 3: *I don't know* him. || 그 사람 몰라.
These are || 이렇게 들려요 · 디져
> 1: *These are* my friends. || 이쪽은 내 친구들이야.
> 2: *These are* yours. || 이것들 네 거야.
> 3: *These are* good. || 이것들 좋다.
## H. Want to, got to & "of"|의도 / 전치사 of 축약
Want to [Wanna] || 이렇게 들려요 · 워너
> 1: Do you *want to* dance? || 너 춤추고 싶어?
> 2: I *want to* go home. || 나 집에 가고 싶어.
> 3: What do you *want to* do? || 너 뭐 하고 싶어?
Got to [Gotta] || 이렇게 들려요 · 가러
> 1: I've *got to* go. || 나 가야 돼.
> 2: You *gotta* see this. || 너 이거 봐야 돼.
> 3: We *gotta* hurry. || 우리 서둘러야 해.
Kind of [Kinda] || 이렇게 들려요 · 카인다
> 1: I'm *kind of* tired. || 나 좀 피곤해.
> 2: It's *kind of* cute. || 이거 좀 귀엽다.
> 3: I *kind of* like it. || 나 이거 좀 마음에 들어.
Sort of || 이렇게 들려요 · 소러
> 1: I'm *sort of* tired. || 나 조금 피곤해.
> 2: It's *sort of* weird. || 그거 약간 이상해.
> 3: I *sort of* agree. || 어느 정도 동의해.
Out of || 이렇게 들려요 · 아우러
> 1: We are *out of* time. || 우리 시간 다 됐어.
> 2: Get *out of* here. || 여기서 나가.
> 3: I'm *out of* money. || 나 돈 떨어졌어.
Front of || 이렇게 들려요 · 프러너
> 1: Come stand in *front of* me. || 와서 내 앞에 서주세요.
> 2: In *front of* the house. || 집 앞에서.
> 3: In *front of* everyone. || 모든 사람들 앞에서.
A lot of || 이렇게 들려요 · 얼라러
> 1: I have *a lot of* work to do. || 할 일이 아주 많아.
> 2: Thanks *a lot of* help. || 많은 도움 고마워.
> 3: *A lot of* people came. || 많은 사람들이 왔어.
Little bit || 이렇게 들려요 · 리를빗
> 1: Just a *little bit* off the back. || 뒤로 조금만 벗어나면 돼.
> 2: A *little bit* more. || 조금만 더.
> 3: I'm a *little bit* nervous. || 나 조금 긴장돼.
## I. Verb + pronoun|동사 + 대명사 축약
Give me || 이렇게 들려요 · 김미
> 1: *Give me* a second. || 잠깐만.
> 2: *Give me* that. || 그거 내놔.
> 3: *Give me* a call. || 전화해.
Give me your || 이렇게 들려요 · 김미여
> 1: *Give me your* hand. || 손 좀 줘봐요.
> 2: *Give me your* number. || 전화번호 좀 줘.
> 3: *Give me your* attention. || 집중해 주세요.
Ask her || 이렇게 들려요 · 애스커
> 1: You could just *ask her* out. || 그녀에게 데이트 신청해봐.
> 2: *Ask her* name. || 그녀의 이름을 물어봐.
> 3: *Ask her* if she's free. || 시간 되는지 물어봐.
Tell him || 이렇게 들려요 · 텔림
> 1: *Tell him* I'm ready. || 나 준비됐다고 그에게 전해줘.
> 2: *Tell him* the truth. || 그에게 진실을 말해.
> 3: *Tell him* to call me. || 나한테 전화하라고 해.
Got you || 이렇게 들려요 · 가야 / 가츄
> 1: I *got you* some coffee. || 커피 좀 챙겨왔어.
> 2: *Got you*! || 잡았다 / 이해했어!
> 3: I *got you* covered. || 내가 다 알아서 할게.
## J. Verb + phrase chains|동사 + 숙어 / 연동 구문
Check it out || 이렇게 들려요 · 체키라웃
> 1: *Check it out* yourself. || 직접 확인해봐.
> 2: *Check it out*! || 이거 봐봐!
> 3: Let me *check it out*. || 내가 확인해볼게.
Take it easy || 이렇게 들려요 · 테키리지
> 1: *Take it easy*, man. || 진정해, 친구.
> 2: Just *take it easy*. || 편하게 생각해.
> 3: *Take it easy* on him. || 그에게 살살 해.
Get out of || 이렇게 들려요 · 게라우러
> 1: I'll *get out of* here. || 나는 여기서 나갈게요.
> 2: *Get out of* my way. || 길 좀 비켜줘.
> 3: *Get out of* bed. || 침대에서 일어나.
Forget it || 이렇게 들려요 · 퍼게릿
> 1: I'll never *forget it*. || 절대 잊지 않을 거야.
> 2: Just *forget it*. || 그냥 잊어버려.
> 3: *Forget it*, it's fine. || 됐어, 괜찮아.
Let it go || 이렇게 들려요 · 레리꼬
> 1: Just *let it go*. || 그냥 잊어버려 / 털어버려.
> 2: You should *let it go*. || 너 이제 털어버려야 해.
> 3: *Let it go* for now. || 지금은 일단 넘어가자.
Put it on || 이렇게 들려요 · 푸리론
> 1: *Put it on* the table. || 탁자 위에 올려놔.
> 2: *Put it on* my account. || 내 장부에 달아줘.
> 3: *Put it on*, it's cold. || 입어, 날씨 차가워.
`;

/* 표현별 영상 시작 시간(초) — 그 표현을 처음 소개하는 지점 */
const TIMES=[64, 104, 150, 192, 241, 287, 334, 377, 426, 473, 522, 567, 609, 658, 706, 752, 807, 863, 905, 952, 999, 1040, 1083, 1126, 1177, 1225, 1273, 1321, 1366, 1420, 1470, 1516, 1560, 1606, 1650, 1698, 1748, 1795, 1841, 1884, 1929, 1976, 2027, 2073, 2120, 2165, 2219, 2267, 2310, 2354, 2399, 2447, 2496, 2551, 2606, 2655, 2697, 2747, 2806, 2855, 2898, 2944, 2991, 3039, 3080, 3133, 3181, 3235, 3285, 3348, 3383, 3426, 3483, 3532, 3575, 3624, 3677, 3729, 3786, 3839];

return {RAW,TIMES};
})();
