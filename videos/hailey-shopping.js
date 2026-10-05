/* 헤일리 쌤 — 쇼핑 100문장 (교안: 영어 쉐도잉 100문장 · 쇼핑 편) */
window.VIDEO=(function(){
/* "## 상황|뜻|설명",  문장 || 뜻,  "? " = 교안의 단어·발음·문법 TIP */
const RAW = `
## Browsing|매장에서 둘러보기|직원이 말을 걸 때, 그냥 둘러보는 중이라고 답할 때 쓰는 표현이에요.
Are you looking for anything *in particular*? || 특별히 찾으시는 것 있으세요?
? look for = 찾아보는 '과정', find = 찾아낸 '결과' · in particular = 특별히 · 발음 /퍼(r)티뀰러r/
Can I *help you find* something? || 무언가 찾으시는 것 도와드릴까요? / 어떤 것 찾으세요?
? help someone (to) 동사
No, I'm *just looking*. Thanks. || 아뇨, 그냥 둘러보는 중이에요. 감사합니다.
Uh, no, thanks. I'm *just browsing*. || 아뇨, 괜찮아요. 그냥 둘러보는 중이에요.
? browse = (무엇이 있는지) 둘러보다
Uh, I'm *looking for* a tie. || 아, 넥타이를 찾고 있는데요.
Are you guys *open*? || 영업하시나요?
? 발음 open /오우쁜/
Excuse me, are you *in line*? || 실례합니다, 혹시 줄 서 계시는 건가요?
? in line = (대기) 줄에 서 있는
## Size & fit|색상·사이즈·입어 보기|다른 색이나 사이즈를 묻고, 입어 보고, 어울리는지 말할 때 써요.
Does this *come in* any other colors? || 이거 다른 색깔로도 나와 있나요?
? come = (상품이) 나오다 · 색깔 앞엔 in · other + 복수명사
Do you have this cashmere sweater *in a larger size*? || 이 캐시미어 스웨터 더 큰 사이즈로 있나요?
? 사이즈 앞엔 in
Can I *try this on*, please? || 이거 입어 봐도 되나요?
? try on = 입어 보다 · 구동사는 뒤 전치사에 강세: try ON
Could I *try these in a 9*? || 이거 사이즈 9로 신어 볼 수 있을까요?
? 신발, 바지, 양말은 한 켤레·한 벌도 복수: these · 미국 여자 신발 9 ≈ 250~260
*I'm a seven and a half*. || 제 사이즈는 7.5예요.
? 발음 half /해~f/ (l은 묵음)
Well, that *looks great on you*. || 그거 너한테 잘 어울린다.
? look good/great on someone = ~에게 잘 어울리다
You *look amazing in* that suit. || 너 그 정장 입으니까 정말 멋있는데.
? in + 의상 = ~을 입은 · 발음 suit /쑽~/
It's gonna be hard for me to *pull this off*. || 이건 내가 소화하기에는 어려울 것 같은데.
? pull off = (어려운 것을) 해내다, (옷·스타일을) 잘 소화하다
## In stock|물건 종류와 재고|선택지가 많은지, 재고가 있는지 이야기할 때 써요.
They have a *wide selection*. || 거긴 선택권이 넓어. / 거긴 물건 종류가 많아.
? 가게나 회사를 they로 불러요. · selection = 고를 수 있는 물건들
There wasn't a *big selection*. || 선택지가 별로 없었어.
I'm afraid we're *out of stock*. || 안타깝지만 재고가 다 떨어졌어요.
? I'm afraid = 유감이지만 · out of stock = 품절된 · 발음 outta /아우러/
Well, we don't have any *in stock* right now, but I would be happy to order it for you. || 현재 재고는 없지만 주문을 넣어 드릴 수 있어요.
? be happy to 동사 = 기꺼이 ~하다
They're *selling like crazy*. That's the last one. || 그것들 엄청 잘 팔려요. 그게 마지막 남은 하나예요.
? sell = 팔리다 · like crazy = 미친 듯이
I got some *in the back*. || 뒤쪽에(창고에) 몇 개 있어요.
? got = have의 캐주얼한 표현 · in the back = 창고에
Might have some *in the back*. || 뒤쪽에(창고에) 몇 개 있을지도 모르겠어요.
? might = ~할지도 모른다
## Checkout|계산대에서|살 물건을 고르고 계산할 때 오가는 말이에요.
I think I like it. *I'll take it*. || 마음에 드는 것 같아요. 이걸로 할게요.
? take = 사다
I'm gonna *wear this home*. || 저 이거 입고 갈게요.
? wear something home = 산 옷을 입은 채로 가다 · 발음 home /호움/
Can you *ring me up*? || 계산해 주시겠어요?
? ring someone up = 계산해 주다
I'll *ring you up* over here. || 이쪽에서 계산해 드릴게요.
? over here = 이쪽에서 (상대가 조금 움직여야 할 때)
Did you find *everything you were looking for*? || 원하시던 것 다 찾으셨어요?
*Find everything you need*? || 필요한 것 다 찾으셨나요?
? 앞의 Did you를 생략한 캐주얼한 말
Would you like that *gift-wrapped*? || 선물 포장해 드릴까요?
? would like something p.p. = ~가 ~되기를 원하다 · 복합어 강세: GIFT-wrap
All right, *that'll be* $18.50. || 네, 18달러 50센트입니다.
? That'll be 금액 = (얼마)입니다 · eighteen fifty
Okay, looks like *your total comes to* $37.98. || 총 37달러 98센트입니다.
? Your total comes to 금액 = 총 (얼마)입니다
## Payment|결제하기|카드, 현금, 할부, 영수증, 멤버십 카드에 대해 말할 때 써요.
Will you be paying with *debit or credit*? || 직불카드와 신용카드 중 어떤 걸로 결제하시겠어요?
? will be -ing = 예정된 일을 묻는 더 정중한 말투 · debit (card) = 직불카드
*Cash or charge*? || 현금이세요, 카드세요?
? charge = 신용카드 청구 요금
Can I *pay in installments*? || 할부 결제 가능한가요?
? in (monthly) installments = 할부로
I'm sorry, but your credit card *has been declined*. || 죄송합니다만 고객님의 카드 승인이 거절되었어요.
? decline = 거절하다 · has been = 지금도 거절된 상태
Do you *need a bag*? || 봉투 드릴까요?
Here's your *change*. || 여기 잔돈입니다.
Can I *get a receipt*? || 영수증 받을 수 있을까요?
? 발음 receipt /뤼앁~/ (p는 묵음)
Do you have *a card with us*? || 저희 (멤버십) 카드 있으세요?
Do you have your *loyalty card*? || 포인트 적립 카드 있으세요?
? loyalty card = 멤버십·포인트 카드
## Returns|쿠폰·교환·반품|쿠폰과 상품권을 쓰고, 교환하거나 반품·환불할 때 써요.
I would like to *redeem this coupon*. || 이 쿠폰을 사용하고 싶은데요.
? redeem = (쿠폰을) 현금이나 상품으로 바꾸다 · 발음 coupon /쿠~빤~/
This coupon is *expired*. || 이 쿠폰은 사용 기한이 만료됐어요.
It's a *gift certificate* for a spa treatment. || 이건 스파 관리 상품권이야.
? gift certificate = 상품권
You can *exchange* them if you want, okay? || 원하면 교환해도 돼, 알겠지?
I *exchanged* the blouse you got me. || 네가 사 준 블라우스 교환했어.
? get someone something = ~에게 ~을 사 주다
I'm gonna *send these back*. || 이것들은 반품하려고요.
? send back = 돌려보내다, 반품하다
Excuse me, I'd like to *return* this jacket. || 실례합니다, 이 재킷을 반품하고 싶어요.
? 발음 jacket /쟤~낕/
I'll get right to *processing your return*. || 고객님의 반품 건을 바로 처리해 드리겠습니다.
? get to -ing = ~에 착수하다 · right = 바로 · process = 처리하다
I can issue you a *full refund*. || 환불금 전액을 지급해 드릴 수 있어요. / 전액 환불해 드릴게요.
? issue = 발급하다, 지급하다 · refund = 환불(금)
Sorry, *no returns, no exchanges*. || 죄송합니다만 환불이나 교환은 불가능합니다.
The tickets were *non-refundable*. || 티켓은 환불 불가 상품이었어요.
? 발음 non /난~/
I can give you *store credit*. || 매장 적립금으로 드릴 수는 있어요.
? store credit = 반품 대신 주는 매장 적립금
## Sales|세일과 할인|판매 여부, 세일, 1+1, 재고 정리, 할인가를 말할 때 써요.
Oh, that's cute. Is that *for sale*? || 오, 저거 귀엽네요. 저것도 판매하는 건가요?
? for sale = 판매 중인
I'm sorry, ma'am. That's just a display. It's *not for sale*. || 손님, 죄송합니다만 그건 전시용이라 판매하는 것은 아닙니다.
? 발음 ma'am /맴~/
Is everything *on sale*? || 모든 게 세일 중인가요?
? for sale = 판매 중 / on sale = 할인 중
I got it *on sale*. || 이거 할인할 때 샀어.
Louis Vuitton products never *go on sale*. || 루이 비통 제품들은 할인을 하는 법이 없어요.
? go on sale = 할인에 들어가다
They're *having a sale on* toiletries. || 거기 욕실용품 할인 중이야.
? have a sale on = ~을 할인하다 · toiletries = 세면도구
It's the final day of our *liquidation sale*. || 오늘은 저희 점포 정리 세일 마지막 날입니다.
? liquidation sale = 점포 정리 세일
We're having a *two-for-one sale*. || 현재 원 플러스 원 할인 행사 중입니다.
? '1+1'은 원어민이 안 쓰는 표현이에요.
Those are *buy one, get one free*. || 그것들은 원 플러스 원 행사 상품이에요.
I got these on a *clearance rack* at Target. || 이것들은 타깃의 재고 정리 선반에서 샀어.
? clearance = 재고 정리
Go check out our CD selection. It's all *on clearance*. || 저희 CD 진열품도 한번 가서 확인해 보세요. 모두 재고 정리 세일 중이에요.
? go + 동사원형 = 가서 ~하다
I got this meditation candle *for 80% off*. || 이 명상 양초 80% 할인가에 샀어.
I *got a good deal on* it. || 그거 싸게 잘 샀어.
? get a good deal on = ~을 좋은 가격에 사다
They're cheaper *in bulk*. || 그것들 대량으로 사면 더 싸.
## Spending|돈 쓰기와 예산|어디서 얼마에 샀는지, 돈이 빠듯한지 말할 때 써요.
I got it at a *thrift shop*. || 그거 중고품 할인 매장에서 샀어.
? thrift shop = 중고품 할인 판매점 · thrift = 절약
You find lots of treasures at *thrift stores*. || 중고품 가게에서 많은 보물을 찾을 수 있어.
? '누구라도'는 you로 말해요.
I *can't afford it*. || 난 살 여력이 안 돼. / 난 그럴 형편이 안 돼.
? afford = ~할 (돈·시간) 여유가 되다
We're *on a tight budget* here. || 우린 지금 예산이 빠듯한 상황이야.
? I'm on a budget.만 써도 돼요.
I just got a huge *credit card bill*. || 나 카드값이 너무 많이 나왔어. / 이번 카드 대금이 정말 많이 나왔어.
I *maxed out* my credit card. || 나 카드 한도 초과됐어. / 나 신용카드 최대 한도에 달했어.
? max out = 최대 한도에 달하다
I *got it for 18 bucks* on Amazon. || 그건 아마존에서 18달러에 샀어.
? buck = 달러 · 살 때 금액 앞엔 for, 팔 때는 at · 웹사이트 앞엔 on
I *spent $49 on* this. || 나 이거에 49달러 썼어.
? spend 돈 on something
Wait, you *spent $500 on* sneakers? || 잠깐만, 운동화에 500달러를 썼다고?
? 발음 sneakers /스니~꺼rz/
## Prices|가격 평가하기|비싸다, 바가지다, 싸다, 가성비 좋다고 말할 때 써요.
This place is so *overpriced*. || 이곳은 가격이 너무 바가지예요. / 여긴 가격이 과하게 책정돼 있어요.
Seems kind of *pricey*. || 좀 비싸 보이는데.
? seem + 형용사 = ~해 보이다 · pricey = 비싼 · kind of /카인다/
20 bucks a candle? That seems a little *steep*. || 양초 하나당 20달러? 가격이 좀 과해 보이는데.
? steep = (가격이) 터무니없이 높은
I think you *got ripped off*. || 너 바가지 쓴 것 같은데.
? rip someone off = 바가지를 씌우다
Excuse me, I think you may have *overcharged* us. || 죄송한데요, 저희에게 금액을 좀 과도하게 청구하신 게 아닌가 해서요.
? may have p.p. = ~했을지도 모른다
*What a bargain*! || 정말 싼데! / 그렇게 싸다니!
? bargain = 싸게 산 물건 · What a + 명사! = 감탄
At $20,000, *it's a steal*. || 2만 달러면 완전 거저야.
? steal = 거저나 다름없는 것
Okay, these are *reasonably priced*. || 좋아, 이것들 가격이 괜찮네. / 좋아, 이것들 가격이 합리적으로 책정돼 있네.
It's very *good value for money*. || 가성비가 정말 좋아.
That's not gonna *cost us* as much money as I thought. || 그 정도면 내가 생각했던 만큼 우리에게 큰 돈이 들진 않을 것 같네.
? cost someone 비용 = ~에게 비용이 들다 · as A as B = B만큼 A
It was a lot more *affordable* than I thought it would be. || 생각했던 것보다 훨씬 더 저렴했어요.
? a lot/much/far/way + 비교급 = 훨씬 · affordable = 가격이 적당한
*You get what you pay for*. || 지불한 만큼 얻는 거죠. / 비싸면 그만한 값을 하죠. / 싼 게 비지떡이죠.
This is *exactly what I was looking for*. || 딱 내가 찾던 거야.
? 발음 exactly /익쟄~끌리/
## After buying|산 뒤에, 생필품 떨어질 때|구매 후기, 비축, 쇼핑 몰아서 하기, 품질 보증에 대해 말할 때 써요.
I don't *regret buying* it. || 이거 산 것 후회 없어.
? regret -ing = ~한 것을 후회하다
Well, it was an *impulse buy*. || 그건 충동 구매였어.
It wasn't *worth the money*. || 그만한 돈을 들일 가치는 없었어요. / 돈이 아까웠어요.
? worth the money / the wait / the effort
I *never should've bought* it. || 절대 사지 말았어야 됐어.
? never should have p.p. = 절대 ~하지 말았어야 했다 · 발음 should've /슈르v/
I'm *running low on* toilet paper. || 나 휴지 거의 떨어져 가.
? run low on = ~이 거의 떨어져 가다
We're *running low on* baby wipes. || 우리 아기용 물티슈 거의 다 써 가.
? wipe = 물티슈
We better *stock up on* food and beverages. || 우리 음식이랑 음료 좀 비축해 놓는 게 좋겠어.
? (had) better = ~하는 게 좋겠다 · stock up on = 많이 사서 쟁여 두다
I *stocked up on* all your favorites. || 네가 제일 좋아하는 것들 다 쟁여 놨어.
Today we went on a crazy *shopping spree*. || 우리 오늘 엄청 질렀어. / 우리 오늘 흥청망청 쇼핑을 즐겼어.
? go on a shopping spree = 쇼핑을 몰아서 하다 · 발음 spree /스쁘뤼~/
I'm taking you for lunch and a *shopping spree*. || 제가 점심 사 드리고 쇼핑도 거하게 시켜 드릴게요.
? take someone for = ~에게 ~을 대접하다
You saved your *warranty*, right? || 보증서 보관해 두셨죠?
? warranty = 품질 보증서
It's all right. It's *under warranty*. || 괜찮아. 보증 기간 내에 있어.
? under warranty = 무상 수리 기간 내인
`;

const TIMES=[86,101,117,134,152,165,178,195,212,231,246,261,275,290,306,330,338,354,370,396,416,430,445,461,474,487,501,517,531,546,577,587,604,617,635,653,666,679,692,706,728,738,754,772,797,806,822,842,860,878,897,913,931,948,970,984,998,1017,1034,1054,1071,1096,1111,1133,1153,1167,1182,1197,1216,1236,1245,1262,1278,1296,1315,1335,1352,1369,1389,1406,1426,1441,1457,1474,1493,1514,1533,1548,1565,1580,1596,1611,1625,1642,1659,1676,1695,1723,1733,1749];

return {RAW,TIMES};
})();
