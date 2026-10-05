/* 헤일리 쌤 — 패턴 34개로 300문장 (교안: 영어 쉐도잉 100문장 · 유용한 영어 패턴 1·2편. 3편은 교안이 나오면 추가) */
window.VIDEO=(function(){
/* "## 패턴|짧은 뜻|패턴 설명",  문장 || 뜻,  "? " = 교안의 단어·발음·문법 TIP */
const RAW = `
## I was wondering if…|1편 · 혹시 ~일까 해서|I was wondering if 주어+동사. 궁금한 점을 묻거나 도움을 청하는 공손한 표현이에요. 덜 직접적으로 물어서 상대에게 부담을 주지 않아요.
*I was wondering if* I could borrow your car. || 네 차 좀 빌릴 수 있을까 해서.
? borrow something = ~을 빌리다 · 발음 borrow /버~로우/
*I was wondering if* I could talk to you for a minute. || 너랑 잠깐 얘기 좀 할 수 있을까 해서.
? for a minute = 잠시 · 발음 talk /톸/ 아닌 /텈~/
*I was wondering if* I could ask you a couple of questions. || 제가 몇 가지 질문 좀 드려도 될까 해서요.
? ask someone은 바로 붙여 써요. Ask me. (O) Ask to me. (X) · a couple (of) = 두서너 개의 · 발음 questions /쿠웨스쳔z/
*I was wondering if* you could help me with something. || 혹시 저 뭔가 좀 도와주실 수 있나 해서요.
? help someone with something = ~가 ~하는 것을 돕다
*I was wondering if* you could do me a favor. || 부탁 하나만 들어주실 수 있을까 해서요.
? do someone a favor = ~의 부탁을 들어주다
*I was wondering if* you could give me a ride. || 저 좀 태워다 주실 수 있을까 해서요.
? give someone a ride = ~을 차로 태워다 주다
*I was wondering if* you knew. || 넌 혹시 알고 있나 해서.
? 발음 knew /뉴/ 아닌 /누~/ (미국영어 기준)
*I was wondering if* maybe you've seen him? || 혹시 그 사람을 보신 적이 있나 해서요.
? have p.p. = ~한 적 있다 (경험)
You know, *I was wondering if* you'd like to go to lunch someday. || 저, 언제 한번 점심 같이 하는 거 괜찮으신지 해서요.
? would like to = want to보다 예의 있는 표현 · breakfast, lunch, dinner 앞엔 관사를 안 써요 (go to lunch). 수식어가 붙으면 a를 붙여요 (a free lunch).
*I was wondering if* you wanted to get a glass of wine or something. || 혹시 와인 한잔 하고 싶은지 해서.
? 말끝의 or something = "뭐 그런 거". 말투를 가볍고 덜 확정적으로 만들어요.
## I'm having trouble…|1편 · ~하는 데 어려움을 겪고 있어|I'm having trouble 동사-ing. 지금 겪고 있는 문제나 어려움을 말할 때 써요. trouble은 셀 수 없는 명사예요.
*I'm having trouble* breathing. || 나 숨이 잘 안 쉬어져. / 나 숨쉬기가 힘들어.
? breathe = 숨을 쉬다 · 발음 breathing /브뤼~딩/
*I'm having trouble* hearing you. || 당신 말이 잘 안 들려요.
? hear someone = ~의 말이 잘 들리다
*I'm having trouble* remembering things. || 저 (요즘) 기억이 잘 안 나요.
*I'm* actually *having trouble* sleeping lately. || 사실 요즘 잠을 잘 못 자고 있어요.
? lately = 최근에, 요즘 · 발음 lately /레잍리/
*I'm having trouble* understanding what's going on right now. || 지금 무슨 상황인지 이해하기가 힘드네요.
? what's going on = 무슨 일이 일어나고 있는지 · 발음 on /언~/
*I'm having* some *trouble* deciding on my career path. || 진로를 결정하는 게 어려워요.
? decide on something = ~에 관해 결정을 내리다 · career path = 진로
*I'm having* a little *trouble* financially. || 저 재정적으로 약간 문제를 겪고 있어요. / 재정이 궁핍한 상황이에요.
? financially = 재정적으로
*Did you have* any *trouble* finding the place? || 여기 찾는 데 어려움은 없으셨어요?
## I could use…|1편 · ~가 있으면 좋겠어, ~가 필요할 것 같아|I could use 명사. I want, I need보다 원어민스러운 표현이에요. 원하는 것을 직접 요구하기보다 암시하는 방식이고, 피곤하거나 스트레스 받을 때 자주 써요.
*I could use* a coffee. || 커피 한 잔 마시고 싶다.
? a coffee = 커피 한 잔. 주문할 땐 관사를 넣어 말하는 게 더 자연스러워요.
*I could* really *use* a drink. || 정말 술 한잔 하고 싶네.
? a drink = 술 · 발음 really /륄~리/
*I could use* a little break. || 휴식이 좀 필요할 것 같아.
*I could use* some help. || 도움이 좀 필요할 것 같아.
*I could* really *use* your advice on this. || 이 문제에 대한 네 조언이 정말 필요할 것 같아.
? on something = ~에 관해 · 발음 advice /얻봐이s/
## I'm gonna have to…|1편 · (아무래도) ~해야 할 것 같아|I'm gonna have to 동사원형. 단도직입적인 I have to와 달리, 상황 때문에 어쩔 수 없이 내린 결정이라는 느낌이에요. 불편한 소식을 미안한 마음으로 부드럽게 전할 때 써요. 발음 gonna /가나, 거나/
*I'm gonna have to* call you back. || 제가 나중에 다시 전화드려야 할 것 같네요.
? 발음 call /컬~/
*I'm gonna have to* think about it. || 생각 좀 해 봐야 할 것 같아요.
*I'm gonna have to* say no. || 안 된다고 말해야 할 것 같다. / 아무래도 거절해야 할 것 같네.
*I'm gonna have to* disagree with you. || 그 부분에는 동의할 수 없을 것 같네요. / 그 의견에는 반대해야 할 것 같아요.
? disagree with someone = ~의 말에 동의하지 않다
*I'm gonna have to* talk to my supervisor. || 제 상사와 이야기해 봐야 할 것 같아요.
? supervisor = 상사, 관리자 · 발음 /쑤~뻐r봐이저r/
*I'm gonna have to* cancel tonight. I'm sorry. || 오늘 밤은 취소해야 할 것 같아. 미안해.
? 발음 cancel /캔~썰/ · tonight /트나잍/ · sorry /써~뤼/
Listen, I think *I'm gonna have to* postpone our meeting. || 있잖아, 아무래도 우리 회의를 연기해야 할 것 같아.
? postpone = 연기하다 · 발음 /포우st포운/
I think *I'm gonna have to* pass. || 난 빠져야 할 것 같아. / 사양해야 할 것 같아.
? pass (on something) = 사양하다, 빠지다
Oh, I would love that, but *I'm gonna have to* take a rain check. || 정말 그러고 싶지만, 다음 기회로 미뤄야 할 것 같아요.
? I would love that, but… = 거절을 부드럽게 · take a rain check = 다음을 기약하다 (우천 취소 때 주던 교환권에서 유래)
*I'm gonna have to* ask you to leave. || 나가 주셔야 할 것 같습니다. (나가 달라고 요청드려야 할 것 같습니다.)
? ask someone to 동사 = ~에게 ~해 달라고 요청하다
## I wish I could…|1편 · (불가능하지만) ~할 수 있다면 좋겠어|I wish I could 동사원형. 현실적으로 불가능한 바람에 아쉬움을 표현해요. 공손하게 거절할 때도 자주 써요. hope는 일어날 수 있는 일, wish는 일어나기 힘든 일에 써요.
*I wish I could* be there with you. || 나도 너랑 함께할 수 있다면 좋겠어.
*I wish I could* be more like you. || 제가 더 당신 같았으면 좋겠어요.
Sorry, *I wish I could* be more helpful. || 미안해요, 더 도움이 될 수 있다면 좋았을 텐데요.
*I wish I could* take it back. || 나도 되돌릴 수 있다면 좋겠어.
? take something back = (잘못을 인정하며) 한 말을 취소하다
*I wish I could* stay longer, but I gotta get going. || 나도 더 오래 있을 수 있으면 좋겠지만, 이제 가 봐야 돼서.
? gotta = got to · get going = 가다, 떠나다 · 발음 longer /렁~거r/
## I can't help but…|1편 · ~하지 않을 수가 없어|I can't help but 동사원형. 어떤 행동이나 감정을 억누를 수 없다는 진실한 느낌을 전해요.
*I can't help but* be impressed. || 감명받지 않을 수 없네요.
? impressed = 감명을 받은 · 발음 /임프뤠st/
*I can't help but* think this is wrong. || 아무래도 이건 잘못됐다는 생각을 지울 수가 없어. / 아무리 생각해도 이건 아닌 것 같아.
? 발음 wrong /뤙~/
*I can't help but* feel partially responsible. || 나도 일부 책임이 있다는 느낌을 지울 수가 없어.
? partially = 일부 · responsible = (안 좋은 상황에) 책임이 있는 · 발음 /파r~셜리/ /뤼스빤~써벌/
*I can't help but* wonder how you see things between us. || 네가 우리 사이를 어떻게 생각하는지 궁금해하지 않을 수가 없어.
? things between A and B = A와 B의 사이, 관계
Sorry, *I couldn't help but* overhear. || 죄송해요, 우연히 엿듣게 됐어요.
? overhear = (남의 대화를) 우연히 엿듣다
Hi. Excuse me. *I couldn't help but* notice that you're crying. || 저, 실례지만, 울고 계시는 모습을 못 본 척할 수가 없어서요.
? notice (that) = ~라는 걸 알아채다 · 발음 notice /노우리s/
## I can't afford…|1편 · ~할 여유가 없어, ~할 여력이 안 돼|I can't afford to 동사원형 / I can't afford 명사. 돈, 시간, 감정, 상황적으로 무언가를 감당할 형편이 아니라는 뜻이에요.
*I can't afford to* buy all this stuff. || 전 이 모든 걸 살 돈 없어요.
? stuff = 것(들) · 발음 all /얼~/ · stuff /스떠f/
*I can't afford to* pay everybody I need. || 제가 필요한 모든 사람들에게 돈을 지불할 여유가 없어요.
*I can't afford to* lose this job. || 난 이 일을 잃을 수 있는 처지가 아니야. / 이 직장을 잃을 수는 없어.
You're thirty. *You can't afford to* be picky. || 너 이제 서른이야. 까다롭게 굴 여유가 없어.
? picky = 까다로운
*I cannot afford* a new car. || 전 새 차를 살 돈 없어요.
? 발음 new /누~/ (미국영어 기준)
*I can't afford* another mistake. || 난 또 한 번의 실수는 감당할 수 없어.
? another + 단수명사 / other + 복수명사 · 발음 mistake /미스떼잌/
*I can't afford* any more trouble. || 더 이상의 문제는 감당할 수 없어.
## I was just about to…|1편 · 막 ~하려던 참이었어|I was just about to 동사원형. 어떤 행동을 하기 바로 직전이었다는 타이밍을 강조해요. 아직 하지 않았다는 뜻이라 상황에 따라 핑계처럼 들릴 수 있어요.
*I was just about to* leave. || 이제 막 떠나려던 참이었어요.
? be about to 동사 = ~하려는 참이다
Hey, *I was just about to* call you. || 너한테 막 전화하려던 참이었어.
*I was just about to* get up. || 지금 막 일어나려던 참이었어.
? get up = (앉거나 누워 있다가) 일어나다
*I was just about to* say the same thing. || 나도 막 똑같은 말을 하려던 참이었는데.
Actually, *I was just about to* go out with some friends. || 사실 친구들이랑 막 나가 놀려던 참이었어.
## I've been meaning to…|1편 · 계속 ~하려고 했어|I've been meaning to 동사원형. 오랫동안 하려고 했지만 아직 못 한 일을 말할 때 써요. 이것도 상황에 따라 핑계처럼 들릴 수 있어요. mean to 동사 = ~하려고 의도하다
Hey, *I've been meaning to* call you. || 너한테 전화하려고 했어.
*I've been meaning to* ask you something. || 계속 너한테 물어보려던 게 있었어.
*I've been meaning to* apologize. || 계속 사과해야지 생각하고 있었어.
? apologize = 사과하다 · 발음 /어팔~러좌이z/
*I've been meaning to* get that fixed. || 계속 그거 고쳐야지 생각하고 있었는데.
? get something p.p. = (남에게 맡겨) ~되게 하다. I'll fix that은 내가 직접, I'll get that fixed는 맡겨서 고친다는 뜻이에요.
There's something *I've been meaning to* tell you. || 계속 너한테 말해 주려던 게 있어.
? tell = 말해 주다, 알려 주다 (정보를 줄 때)
## You might want to…|1편 · ~하는 게 좋을지도|You might want to 동사원형. 조언이나 제안을 할 때 써요. You should보다 훨씬 부드럽고 간접적이라, 그냥 참고하라는 느낌이에요.
*You might want to* consider canceling. || 취소하는 걸 고려해 보는 것도 좋을 수 있어.
? consider 동사-ing = ~하는 것을 고려하다 · 발음 consider /컨씨러r/
*You might want to* reconsider. || 재고해 보는 게 좋을지도.
? reconsider = 재고하다
*You might want to* remember that. || 그걸 기억해 두는 게 도움이 될 거야.
*You might want to* take a look at this. || 이걸 한번 보시면 좋을 것 같아요.
? take a look at something = ~을 보다
*You might want to* change your clothes. || 옷은 갈아입는 게 나을지도.
? 발음 clothes /클로우thz/ 또는 /클로우z/
*You might want to* sit down for this. || 이 얘기는 앉아서 들으시는 게 좋을 거예요. (중요한 이야기니 마음의 준비를 하세요.)
? 놀라운 소식을 전하기 전에 마음의 준비를 시키는 말
*You might want to* try a different city. || 다른 도시에서 한번 살아 보는 것도 좋을 거예요.
*You might want to* step back a little bit. || 뒤로 조금 물러나는 게 좋을 거예요.
? step back = 한 걸음 물러나다
## Do you want me to…?|1편 · 내가 ~해 줄까?|Do you want me to 동사원형? 상대의 뜻을 존중하며 도움을 부드럽게 제안하거나, 상대가 정말 원하는지 확인할 때 써요.
*Do you want me to* drive? || 내가 운전할까? / 내가 운전했으면 해?
*Do you want me to* get you anything? || 뭐 가져다 드릴까요? / 뭐 필요한 거 있어?
? get someone something = ~에게 ~을 가져다 주다
*Do you want me to* make you some coffee? || 제가 커피 좀 타 드릴까요?
? make someone something = ~에게 (음식을) 만들어 주다
*Do you want me to* pick you up? || 내가 데리러 가?
*Do you want me to* stay with you? || 같이 있어 줄까? / 내가 남아 있길 원해?
*Do you want me to* tell you why? || 왜인지 말해 줄까?
*Do you want me to* tell him? || 내가 그에게 말해 주길 원해? / 나더러 그에게 말하라고?
*Do you want me to* wait outside? || 밖에서 기다릴까?
## Did you get a chance to…?|1편 · 혹시 ~해 봤어?|Did you get a chance to 동사원형? Did you…?나 Have you…?는 직접적이라 압박감을 줄 수 있어요. 기회가 있었는지만 확인하는, 상대가 바쁠 수 있다는 걸 배려하는 표현이에요.
*Did you get a chance to* look at the proposal? || 혹시 제안서 확인해 봤어?
? proposal = 제안, 제안서 · 발음 /프뤄포우절/
So *did you get a chance to* read the script? || 그래서 혹시 대본은 읽어 봤어?
So *did you get a chance to* talk to James? || 그래서 혹시 제임스랑은 얘기해 봤어?
*Did you get a chance to* see his face? || 혹시 그의 얼굴은 보셨나요?
## It's been a long time since…|1편 · ~한 게 오랜만이야|It's been a long time since 주어+have p.p./과거. since = ~ 이후로 (지금까지) · 발음 long /렁~/
*It's been a long time since* I've been on a date. || 데이트에 나와 본 게 정말 오랜만이네요.
? 여행, 휴가, 데이트 앞엔 on을 써요. on a trip / on one's honeymoon / on a date
*It's been a long time since* I've seen you guys. || 너희들 보는 거 진짜 오랜만이다.
*It's been a long time since* I've had that much fun. || 그렇게 즐거운 시간을 보낸 건 정말 오랜만이었어요.
? that = 그렇게
*It's been a long time since* anyone's asked me that. || 누군가가 제게 그런 걸 물은 건 정말 오랜만이네요.
? anyone's = anyone has
## Just because… doesn't mean…|1편 · ~라고 해서 ~인 건 아니야|Just because 주어+동사 doesn't mean 주어+동사. 잘못된 결론이나 지나친 일반화를 반박할 때 써요. 발음 because /비커~z/
*Just because* I didn't find it *doesn't mean* it doesn't exist. || 내가 찾지 못 했다고 해서 그것이 존재하지 않는 건 아니야.
? exist = 존재하다 · 발음 /익지st/
*Just 'cause* I'm listening to you *doesn't mean* I've forgiven you. || 내가 네 얘기를 들어 주고 있다고 해서 널 용서한 건 아니야.
? 'cause = because · I've forgiven은 과거에 용서해서 지금도 그 상태라는 걸 강조하는 현재완료예요.
*Just because* you want it *doesn't mean* it can happen. || 네가 원한다고 해서 그 일이 이루어질 수 있는 건 아니야.
? 발음 happen /해~쁜/
Well, *just because* he can *doesn't mean* he will. || 그가 할 수 있다고 해서 (실제로) 할 거란 보장은 없어.
*Just because* she borrowed a pencil from you *does not mean* she likes you. || 그녀가 너한테 연필을 빌렸다고 해서 널 좋아한다는 뜻은 아니야.
*Just because* they're older *doesn't mean* they're right. || 그들이 더 나이가 많다고 해서 그들이 옳은 건 아니에요.
? 발음 older /오울더r/
*Just because* it happened *doesn't mean* it's news. || 어떤 일이 일어났다고 해서 다 뉴스는 아니야.
? 발음 news /누~z/ (미국영어 기준)
## There's nothing wrong with…|1편 · ~는 잘못된 게 아니야|There's nothing wrong with 명사/동사-ing. 부정적인 의견을 반박하거나, 상대의 행동이나 생각을 옹호하며 격려하고 위로할 때 자주 써요.
*There's nothing wrong with* you. || 너에겐 아무런 문제가 없어. / 네가 잘못된 게 아냐.
*There's nothing wrong with* being afraid. || 두려워하는 건 잘못된 게 아니야.
? 뒤에는 명사나 -ing만 와요. 형용사는 being을 붙여요 (being afraid). · 발음 being /비~잉/
*There's nothing wrong with* having different interests. || 서로 관심사가 다른 것에는 어떤 문제도 없어.
? interests = 관심사
*There's nothing wrong with* making people laugh. || 사람들을 웃게 만드는 데 무슨 문제가 있어?
? make someone 동사원형 = ~가 ~하도록 만들다 · 발음 people /피~뻘/ · laugh /래~f/
## There's no telling…|1편 · ~는 아무도 몰라|There's no telling 의문사+주어+동사. 불확실하고 예측할 수 없다는 걸 강조해요. tell = 알아차리다 · there is no telling = there is no way of knowing
*There's no telling* what he might do. || 그가 무슨 짓을 할지는 아무도 몰라요.
*There's no telling* where she is. || 그녀가 어디에 있는지는 아무도 몰라요.
*There's no telling* who'll be next. || 다음이 누가 될지는 아무도 모르죠.
*There's no telling* how high we can go. || 우리가 얼마나 높이 갈 수 있을지는 누구도 몰라.
## Do you happen to…?|2편 · 혹시 ~하시나요?|Do you happen to 동사? 직접적인 Do you…?보다 조심스럽고 예의 있는 말투예요. 한국어의 '혹시' 느낌이고, 아닐 수도 있다는 걸 감안하며 부드럽게 물어요. 발음 happen /해~쁜/
*Do you happen to* know if there's a mechanic nearby? || 혹시 근처에 정비소가 있는지 아세요?
? mechanic = 정비사 · 기준점이 있으면 near (near the park), 없으면 nearby (a hotel nearby)
*Do you happen to* know where the Lakeside Market is? || 혹시 레이크사이드 마켓이 어디 있는지 아세요?
*Do you happen to* know a good accountant? || 혹시 좋은 회계사 좀 아세요?
? accountant = 회계사 · 발음 /어카운턴t/
*Do you happen to* know if she has a boyfriend? || 혹시 걔 남자친구 있는지 알아?
*Do you happen to* sell any ties? || 혹시 넥타이도 파시나요?
*Do you happen to* have another table? It's just a little loud right here. || 혹시 다른 테이블 있을까요? 여긴 조금 시끄러워서요.
? another + 단수명사 / other + 복수명사 · 발음 table /테이벌/
*Do you happen to* have a book called Watership Down? || 혹시 "워터십 다운"이라는 책 있나요?
? 발음 called /컬~d/
*Do you happen to* have these in any other colors? || 혹시 이것들 다른 색상으로도 있나요?
? 색깔 앞에는 in을 써요.
*Do you happen to* have any painkillers? || 혹시 진통제 있어요?
? painkiller = 진통제
*Do you happen to* be free tonight? || 혹시 오늘 밤 시간 괜찮으세요?
*Do you happen to* remember what she looks like? || 혹시 그녀가 어떻게 생겼는지 기억해?
## Is it okay if I…?|2편 · ~해도 될까요?|Is it okay if I 동사? Can I…?보다 부드럽고 공손하게 허락을 구하는 말투예요. 친구끼리나 직장 어디서든 무난해요.
*Is it okay if I* sit here? || 여기 좀 앉아도 돼?
*Is it okay if I* use your bathroom? || 화장실 좀 써도 될까요?
? 복합 단어는 앞부분에 강세를 줘요. BATHroom / SUBway / HIGH school
*Is it okay if I* go take a shower? || 나 샤워하러 가도 될까?
? go + 동사원형 = ~하러 가다. go, come, help는 동사원형과 바로 이어 쓸 수 있어요.
*Is it okay if I* take some pictures? || 저 사진 좀 찍어도 될까요?
*Is it okay if I* ask you some questions first? || 제가 먼저 몇 가지 질문 좀 드려도 괜찮을까요?
? 발음 questions /쿠웨s쳔z/
*Is it okay if I* leave a little early today? || 저 오늘 좀 일찍 들어가 봐도 괜찮을까요?
Hey, *is it okay if I* invite Sylvie over? || 나 실비도 초대해도 돼?
? invite someone over = (주로 집으로) 초대하다. over가 '내 쪽으로'라는 방향을 더해요. · 발음 over /오우붜r/
## Would you mind…?|2편 · ~해 주실 수 있을까요?|Would you mind 동사-ing? 부탁하거나 양해를 구할 때 정중하게 써요. Do you mind보다 공손해요. mind는 '언짢아하다'라서 들어주겠다는 대답은 원래 No, not at all이지만, Sure, Of course도 흔히 써요.
*Would you mind* waiting here? || 여기서 기다려 주시겠어요?
*Would you mind* holding on just a second? || 잠시만 기다려 주시겠어요?
? hold on = 잠시 기다리다 · 발음 on /언~/
*Would you mind* opening the door? || 문 좀 열어 줄래?
? 발음 opening /오우쁘닝/
*Would you mind* getting me a coffee? || 나 커피 좀 갖다 줄 수 있을까?
? a coffee = a cup of coffee. tea, beer, water도 마찬가지예요.
Excuse me, *would you mind* turning off the music, please? || 실례지만 혹시 음악 좀 꺼 주실 수 있나요?
? turn off = 끄다 · 발음 off /어~f/
*Would you mind* keeping it down a little? || 조금만 조용히 해 주시겠어요?
? keep it down = 조용히 하다
*Would you mind* helping me clear the table? || 저 식탁 치우는 것 좀 도와줄래요?
? help someone (to) 동사원형 · clear = 치우다
*Would you mind* going to the store for some more formula? || 마트 가서 분유 좀 더 사다 줄 수 있을까?
? formula = 분유
*Would you mind* picking up Chloe from school for me today? || 오늘 나 대신 클로이 좀 학교에서 데려와 줄 수 있을까?
? 발음 school /s꿀~/
*Would you mind* not smoking in the car? || 차 안에서는 담배 피우지 말아 주시겠어요?
*Would you mind* not mentioning this to Brett? || 이 얘기 브렛한테는 하지 말아 줄래요?
? mention something to someone. mention에 이미 '~에 대해'가 있어서 about은 안 써요.
## Are you telling me…?|2편 · 그러니까 ~라는 얘기야?|Are you telling me (that) 주어+동사? 상대의 말이 믿기 힘들거나 어이없을 때, 알던 것과 달라서 확인차 되물을 때 써요. 상황에 따라 놀람, 불신, 불쾌감, 확인의 뉘앙스예요.
*Are you telling me* it's my fault? || 그게 내 잘못이라는 얘기야?
? fault = 잘못 · 발음 /풜~t/
*Are you telling me* that I made a mistake? || 내가 실수했다는 얘기야?
*Are you telling me* that I'm fat? || 제가 뚱뚱하다는 얘기예요?
? fat은 사람에게 쓰면 무례해요. chubby, overweight, plus-size 같은 말을 써요.
Wait, *are you telling me* there's no hope? || 잠깐만요, 그러니까 희망이 없다는 말씀이신가요?
? 발음 hope /호웊/
*Are you telling me* you want me to leave? || 내가 떠났으면 좋겠다는 말이야?
? want someone to 동사 = ~가 ~하기를 바라다
*Are you telling me* you're just gonna give up? || 그러니까 그냥 포기하겠다는 말이야?
? give up = 포기하다
*Are you telling me* you turned down two hundred and ten grand? || 그러니까 21만 달러를 거절하셨다는 말씀인가요?
? turn down = 거절하다 · grand (슬랭) = 천 달러
*Are you telling me* this is all made up? || 그럼 이 모든 게 다 꾸며낸 말이라는 거야?
? make up = (이야기를) 지어내다 · 발음 all /얼~/
*Are you telling me* that you haven't even met this person? || 그러니까 이 사람을 만나 본 적조차 없다는 말인가요?
*Are you telling me* you are not the least bit curious? || 너 정말 눈곱만큼도 궁금하지 않다는 거야?
? the least bit = 아주 조금이라도 · curious = 궁금해하는
*Are you* really *telling me* that isn't what you wanted? || 정말로 그게 네가 원했던 게 아니라는 거야?
? what 주어+동사 = ~가 ~하는 것 · 발음 really /륄~리/
*Are you* honestly *telling me* you like it? || 그러니까 너 진심으로 그게 좋다는 말이야?
? honestly = 진심으로
## I didn't mean to…|2편 · ~하려던 건 아니었어|I didn't mean to 동사. 변명하거나 사과할 때, 오해받을 상황에서 고의가 아니었다고 말할 때 흔히 써요.
Sorry, *I didn't mean to* wake you. || 미안, 깨울 생각은 없었는데.
Sorry, *I didn't mean to* interrupt. || 죄송해요, 방해하려던 건 아니었는데.
? interrupt = (말이나 행동을) 방해하다, 끊다 · 발음 /이너뤞t/
*I didn't mean to* scare you. || 놀래키려던 건 아니었어요.
? scare = 겁먹게 하다 · 발음 /s께어r/
I'm sorry, *I didn't mean to* be rude. || 죄송해요, 무례하게 굴려던 건 아니었어요.
Sorry, *I didn't mean to* embarrass you. || 미안, 창피 주려던 건 아니었어.
? embarrass = 창피를 주다 · 발음 /임베뤄s/
*I didn't mean to* hurt your feelings. || 당신 기분 상하게 하려던 건 아니었어.
Look, *I didn't mean to* yell at you like that. || 너한테 그렇게 소리 지르려던 건 아니었어.
? look = 자, 있잖아 (말하기 전에 주의를 끄는 말) · yell at = ~에게 소리치다
*I didn't mean to* make you cry. || 널 울리려던 건 아니었는데.
? make someone 동사원형 = ~가 ~하도록 만들다
Look, *I didn't mean to* cause problems for you and Kathy. || 너랑 캐시 사이에 문제를 일으키려던 건 아니었어.
? cause = (안 좋은 일을) 일으키다 · 발음 /커~z/
## I would have to say…|2편 · ~라고 해야 할 것 같아요|I would have to say (that) 주어+동사. 직설적으로 말하기보다 겸손하게 의견을 말할 때, 단정하지 않고 여지를 남길 때 써요.
*I would have to say* I'm a cat person. || 난 고양이파라고 해야 할 것 같아.
? cat/dog person = 고양이/개를 더 좋아하는 사람
Well, *I would have to say* that it's a tragic love story. || 음, 이건 비극적인 사랑 이야기라고 해야 할 것 같아요.
? tragic = 비극적인 · 발음 /t뢔~쥨/
So *I would have to say* right now that I don't agree with it. || 지금은 그것에 동의하지 않는다고 말할 수밖에 없겠네요.
But if you ask me today, if I would ever want to change my situation, *I would have to say* no. || 하지만 만약 여러분이 오늘 제게 제 상황을 바꾸고 싶겠냐고 물으신다면, 아니라고 해야 할 것 같습니다.
? ever = 혹시라도
*I'd have to say* it's highly unlikely. || 가능성이 매우 희박하다고 해야 할 것 같네요.
? highly = 매우 · unlikely = 일어날 가능성이 적은
Well, I guess *I'd have to say* it's too late. || 글쎄, 너무 늦었다고 해야 할 것 같다.
*I'd have to say* that I prefer the classic stuff. || 전 클래식한 것들을 선호한다고 해야 할 것 같아요.
? prefer = 선호하다 · 발음 /p뤼풔r~/
If I had to use one word to sum him up, *I'd have to say* decent. || 그 사람을 한 단어로 요약해야 한다면, '괜찮은' 사람이라고 말할 것 같아요.
? If I had to…, I would… = 굳이 하나 고르자면 · sum up = 요약하다 · decent = 괜찮은 · 발음 /디~쓴t/
## How come…?|2편 · 어째서 ~인 거야?|How come 주어+동사? why는 이유만 묻는 중립적인 질문이고, how come은 의아함, 놀람, 불만이 담겨 있어요. 의문문인데 평서문 어순을 써요.
*How come* you always win? || 어째서 항상 너만 이기는 거야?
? 발음 always /얼~웨이z/
*How come* you don't have a girlfriend? || 어째서 당신 여자친구가 없는 거죠?
*How come* you're home so early? || 어째서 이렇게 일찍 집에 온 거예요?
*How come* you didn't tell me first? || 어째서 나한테 먼저 말하지 않은 거야?
So tell me, *how come* you and I never dated? || 말해 봐, 어째서 너랑 나랑은 한 번도 사귄 적이 없는 걸까?
*How come* I've never seen you here before? || 어떻게 제가 당신을 여기에서 한 번도 못 본 거죠?
*How come* I've never heard of you? || 어째서 제가 당신 얘기를 한 번도 못 들어 봤죠?
? hear of someone = ~에 관해 듣다
Then *how come* I don't feel any better? || 그럼 어째서 제 기분은 전혀 나아지지 않는 걸까요?
? any = 조금이라도
*How come* she doesn't know about this? || 어째서 그녀가 이것에 대해 모르고 있는 거야?
I don't even have one. *How come* they get two? || 난 하나조차 없는데. 어째서 저 사람들은 둘이나 갖는 거야?
## It wouldn't hurt to…|2편 · ~해서 나쁠 건 없지|It wouldn't hurt (for 사람) to 동사. 부담 없이 가볍게 제안할 때 써요. '~하면 좋다'가 아니라 '~해도 해롭지 않다'는 소극적인 긍정이에요. hurt = 해롭다, 문제가 되다
Well, *it wouldn't hurt to* ask. || 뭐, 물어봐서 나쁠 건 없잖아.
*It wouldn't hurt to* talk to him. || 그와 얘기해 보는 것도 나쁠 건 없겠네.
? talk with = 함께 대화하다, talk to = 대화하다 또는 일방적으로 말하다 · 발음 talk /텈~/
*It wouldn't hurt to* have a backup, you know. || 예비책을 마련해 둬서 나쁠 건 없지.
? backup = 대비책
*It wouldn't hurt to* be a little early. || 좀 일찍 가서 나쁠 건 없겠지.
*Wouldn't hurt to* have extra money. || 여분의 돈이 생겨서 나쁠 건 없으니까.
*Wouldn't hurt to* look nice on your first day of school. || 학교 첫날에 예쁘게 보여서 나쁠 건 없잖니.
? look + 형용사 / look like + 명사 · 특정한 날 앞엔 on (on Monday, on my birthday)
I was thinking maybe *it wouldn't hurt to* have one drink? || 생각해 봤는데 한 잔쯤 마시는 건 괜찮지 않을까?
Just saying *it wouldn't hurt to* get out there and make a few friends. || 그냥 밖에 나가서 친구 좀 사귄다고 해서 나쁠 건 없다는 얘기야.
? (I'm) just saying = 그냥 하는 말이야 · get out there = 밖으로, 세상으로 나가다 · make friends = 친구를 사귀다
*It wouldn't hurt to* give a guy a compliment once in a while. || 남자한테 이따금씩 칭찬 한마디 해 줘서 나쁠 건 없어요.
? compliment = 외모·옷차림 등 가벼운 칭찬 (praise는 노력·성과에 대한 칭찬) · once in a while = 가끔 · 발음 /컴~쁠러먼t/
And since you're staying home, *it wouldn't hurt to* do some of your chores. || 그리고 너희 집에 있는 김에 집안일 좀 한다고 나쁠 건 없을 거야.
? since, as = 이미 아는 이유를 배경으로 깔 때 (because는 이유 자체를 강조) · chore = 집안일
We're gonna be traveling for a few days, and *it wouldn't hurt to* get to know each other. || 우리 며칠 동안 (같이) 여행할 건데, 서로 좀 알아가서 나쁠 건 없잖아요.
? be gonna be -ing = 그때 그 상태에 있게 된다 (진행 강조) · get to know = 알아가다
*It wouldn't hurt* for you *to* know it anyway. || 이건 어쨌든 알아 둬서 나쁠 건 없을 거야.
*It wouldn't hurt* for you *to* have a good relationship with him. || 네가 그 사람과 좋은 관계를 맺어서 나쁠 건 없어.
## The last thing I want (to do) is…|2편 · ~는 절대 하고 싶지 않아|The last thing I want (to do) is (to) 동사. 원치 않는 상황에 대한 강한 의사를 표현해요. "내 의도는 전혀 그게 아니다"라고 강조할 때도 흔히 써요.
*The last thing I want to do is* lose you, okay? || 내가 가장 원치 않는 건 널 잃는 거야, 알겠어?
*The last thing I want to do is* get back together. || 내가 가장 하고 싶지 않는 건 (우리가) 다시 만나는 거야.
? get back together = (연인이) 다시 사귀다
*The last thing I want to do* right now *is* talk about work. || 지금 내가 제일 하고 싶지 않은 건 일 얘기하는 거야.
*The last thing I want to do is* ruin our work environment. || 제가 가장 피하고 싶은 건 우리 업무 분위기를 깨뜨리는 거예요.
? ruin = 망치다 · work environment = 업무 분위기
*The last thing I want to do is* make you feel like I'm holding you back. || 내가 가장 원치 않는 건 내가 네 발목 잡는 것처럼 느끼게 하는 거야.
? hold someone back = 발목을 잡다, 막다
*The last thing I want is* to end up like you. || 제가 가장 피하고 싶은 건 결국 당신처럼 되는 거예요.
? end up = 결국 ~하게 되다
*The last thing I want* right now *is* to be hit on. || 지금 내가 제일 원하지 않는 건 누가 나한테 작업 거는 거야.
? hit on someone = ~에게 작업을 걸다
Listen, *the last thing I want is* for us to fight. || 내가 가장 원치 않는 건 우리가 싸우는 거야. (난 너랑 싸울 생각 전혀 없어.)
*The last thing I want is* for her to know about this. || 내가 가장 원치 않는 건 그녀가 이것에 대해 알게 되는 거야. (그녀는 절대 알면 안 돼.)
Look, *the last thing I want is* for people to treat me any differently. || 내가 가장 원치 않는 건 사람들이 어떤 식으로든 날 다르게 대하는 거야.
? treat someone = (특정한 태도로) 대하다 · 발음 people /피~뻘/
## The 비교급, the 비교급|2편 · ~할수록 더 ~하다|the 비교급 (주어+동사), the 비교급 (주어+동사). 두 상황의 상관관계를 말해요. 앞부분은 원인이나 조건, 뒷부분은 결과나 변화예요.
*The more*, *the merrier*. || 다다익선이죠. (많을수록 더 즐겁죠.)
? merry (구식) = 즐거운. Merry Christmas
*The sooner* we start, *the sooner* we finish. || 우리가 빨리 시작할수록 빨리 끝나요.
*The harder* you work, *the easier* it gets. || 열심히 노력할수록 쉬워지지.
? get + 형용사 = ~해지다
I'm telling you, *the longer* you wait, *the worse* it's gonna get. || 내 말 믿어, 더 오래 기다릴수록 (상황은) 더 안 좋아질 거야.
? I'm telling you = 내 말 믿어 · 발음 longer /렁~거r/
*The older* we get, *the harder* it is to make new friends. || 나이가 들수록 새로운 친구를 사귀는 게 더 어려워지잖아요.
? 발음 older /오울더r/ · new /누~/
*The quicker* we get there, *the more* work we're gonna have to do. || 우리가 거기에 더 빨리 도착할수록 우리가 해야 할 일이 더 많아져.
*The closer* you look, *the less* you see. || 더 가까이 들여다볼수록 덜 보이는 법이다.
? 형용사 close(가까운)는 /클로우s/, 동사 close(닫다)는 /클로우z/
At this point, *the less* you know, *the better*. || 지금 시점에서는 덜 아는 게 나아. / 지금은 모를수록 더 좋아.
? at this point = 지금으로서는
*The sooner* we get him out of here, *the better*. || 우리가 그를 여기서 더 빨리 내보낼수록 더 좋아.
? get someone out of 장소 = ~을 ~에서 내보내다
`;

/* 문장별 영상 시작 시간(초) — 그 문장의 첫 장면. 1편 0:00~1:10:54, 2편 1:11:02~2:02:33 (3편 구간은 교안이 나오면 추가) */
const TIMES=[114, 152, 192, 234, 273, 307, 348, 385, 422, 470,
 543, 577, 608, 647, 683, 725, 766, 806,
 877, 914, 949, 980, 1010,
 1079, 1111, 1143, 1177, 1208, 1249, 1289, 1332, 1368, 1411,
 1476, 1510, 1545, 1583, 1615,
 1685, 1721, 1763, 1801, 1853, 1890,
 1968, 2003, 2045, 2086, 2126, 2163, 2201,
 2254, 2287, 2323, 2356, 2394,
 2461, 2496, 2536, 2567, 2600,
 2676, 2714, 2746, 2775, 2810, 2843, 2888, 2925,
 2982, 3010, 3051, 3084, 3115, 3150, 3178, 3210,
 3276, 3320, 3356, 3392,
 3447, 3487, 3525, 3561,
 3621, 3662, 3705, 3752, 3792, 3843, 3886,
 3952, 3987, 4024, 4064,
 4120, 4154, 4185, 4215,
 4283, 4310, 4340, 4367, 4390, 4412, 4449, 4478, 4504, 4527, 4549,
 4602, 4621, 4644, 4665, 4688, 4717, 4743,
 4797, 4820, 4843, 4864, 4885, 4916, 4944, 4968, 4999, 5032, 5056,
 5108, 5130, 5154, 5185, 5215, 5246, 5272, 5303, 5334, 5364, 5394, 5420,
 5462, 5485, 5514, 5536, 5563, 5586, 5610, 5639, 5664,
 5715, 5750, 5790, 5818, 5869, 5895, 5925, 5967,
 6046, 6068, 6092, 6114, 6136, 6165, 6189, 6218, 6242, 6266,
 6328, 6360, 6393, 6417, 6444, 6471, 6500, 6530, 6566, 6596, 6630, 6668, 6696,
 6761, 6788, 6815, 6848, 6879, 6914, 6942, 6976, 7005, 7035,
 7087, 7113, 7140, 7176, 7214, 7246, 7276, 7304, 7331];

return {RAW,TIMES};
})();
