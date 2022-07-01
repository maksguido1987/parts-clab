import type { NextPage } from 'next';
import { PageLayout } from '../entities';
import { PageWrapper } from '../widgets';

const Contract: NextPage = () => {
  return (
    <PageWrapper>
      <PageLayout>
        <h3 className='text-xl sm:text-3xl md:text-[34px] font-semibold mb-3.5 sm:mb-5 md:mb-7'>Договор на оказание услуг</h3>
        <div className='text-xs md:text-sm md:pl-2.5'>
          <ol className='list-decimal space-y-3'>
            <li>
              <p><b>Термины и определения.</b></p>
              <p><b>Продавец</b> – коммерческая организация, индивидуальный предприниматель, или гражданин, признанный в установленном законом порядке самозанятым, осуществляющие деятельность по продаже Товаров потребителям с использованием дистанционного способа и направившие оферту Партсклаб на заключение настоящего Договора в порядке и на условиях, предусмотренных п. 2.1. Договора.</p>
              <p><b>Партсклаб</b> – ООО «Брусника холдниг», (ОГРН: 5147746158951, ИНН: 7720826837) (далее — Партсклаб), являющееся владельцем агрегатора информации о Товарах, владеющее сайтом в сети интернет https://partsclub.ru/, включая все уровни указанного домена, и мобильного приложения («далее – «Сайт» «Портал»), (далее – сервис Партсклаб), на котором размещаются адресованные Покупателям предложения о заключении договора купли-продажи Товаров, принадлежащих Продавцу.</p>
              <p><b>Договор</b> – настоящий договор, заключаемый между Продавцом и Партсклаб в порядке, предусмотренном п. 2.1. Договора.</p>
              <p><b>Личный кабинет</b> – программный интерфейс взаимодействия Продавца с Сайтом (сервисом Партсклаб), который содержит информацию о Продавце, статистики и иную информацию в отношении услуг по Договору, а также предоставляет возможность удаленного взаимодействия Сторон в рамках Договора, доступный Продавцу после авторизации с использованием логина и пароля Продавца на Сайте Партсклаб.</p>
              <p><b>Отчет</b> – детализированный документ по данным статистики за отчетный период (включает в том числе сведения о реализованных Продавцом Товарах, их стоимости, дате покупки Покупателем, суммах, оплаченных Покупателем денежных средств за соответствующие Товары, включая доставку, также наценку сервиса Партсклаб, а также сумму денежных средств, подлежащую выплате Продавцу).</p>
              <p><b>Отчетный период</b> – календарный месяц.</p>
              <p><b>Покупатель</b> – физическое лицо, использующее сервис Партсклаб для поиска и покупки Товаров, размещаемых на сервисе Партсклаб.</p>
              <p><b>Стороны</b> – Партсклаб и Продавец. По отдельности Партсклаб и Продавец именуются Стороной.</p>
              <p><b>Товар (Товары)</b> – товары, являющиеся предметом договора купли-продажи, заключаемого между Продавцом и Покупателем. Продавец является собственником Товара. Все взаимоотношения, связанные с куплей-продажей Товаров на сервисе Партсклаб, возникают непосредственно между Продавцом и Покупателем. Партсклаб не является продавцом Товара и лицом, уполномоченным Продавцом на принятие и удовлетворение требований Покупателей в отношении Товара ненадлежащего качества. Вместе с тем, в случаях, предусмотренных Договором, Продавец может поручить сервису Партсклаб осуществление отдельных действий от имени и за счет Продавца, связанных с принятием и удовлетворением требований Покупателей в отношении Товара.</p>
              <p><b>Услуги Партсклаб</b> - комплекс следующих услуг, оказываемых Партсклаб Продавцу, и связанных с размещением Товарных предложений Заказчика на сервисе Партсклаб:</p>
              <ul className='list-disc pl-2 md:pl-16'>
                <li className='pl-0'><p>услуги по размещению Товарных предложений Продавца и предоставлению Продавцу функционала, позволяющего Пользователю заключить договор купли-продажи Товара Продавца на сервисе Партсклаб;</p></li>
                <li className='pl-0'><p>услуги организации доставки, согласно условиям, указанным в <a className="text-green" href="/docs/supplier_agreement.docx">Договоре</a>.</p></li>
              </ul>
            </li>
            <li>
              <p><b>Порядок заключения Договора.</b></p>
              <ol>
                <li><span>2.1</span><p>Основанием для заключения Договора является предложение Партсклаб о заключении Договора, которое может быть направлено Продавцу по результатам рассмотрения заявки на размещении на сервисе Партсклаб.</p>
                  <p>Получив указанное предложение, Продавец инициирует заключение Договора путем заполнения и направления посредством Личного кабинета сканированной копии заявления-оферты Продавца о заключении Договора по форме, приведенной в Приложении №1 к Договору.</p>
                  <p>Направление Продавцом Партсклаб сканированной копии заполненного, подписанного уполномоченным лицом и скрепленного печатью Продавца (при наличии) заявления-оферты признается направлением Продавцом Партсклаб безотзывной оферты о заключении договора на условиях, указанных в договоре и в заявлении-оферте.</p>
                  <p>Партсклаб уведомляет Продавца об акцепте заявления-оферты либо об отказе в акцепте заявления-оферты по адресу электронной почты, указанному Продавцом в личном кабинете или посредством личного кабинета. В случае акцепта оферты, Партсклаб меняет статус Пользователя Личного кабинета на статус «Продавец» и присваивает номер договора, который отражается в Личном кабинете Продавца (Пользователя). Решение об акцепте оферты Продавца или отказе принимается Партсклаб в течение 3 (трёх) дней с даты получения Партсклаб заявления-оферты Продавца.</p>
                  <p>Договор считается заключенным Сторонами с даты направления от Партсклаб Продавцу уведомления об акцепте заявления – анкеты по адресу электронной почты, указанному Продавцом в Личном кабинете и публикации соответствующей информации в Личном кабинете. Указанное уведомление признается акцептом Партсклаб.оферты Продавца.</p></li>
                <li><span>2.2</span><p>В целях принятия решения об акцепте или в отказе от акцепта оферты, Партсклаб вправе дополнительно запросить у Продавца следующие документы: Свидетельство ИНН, ОГРН, Решение /Протокол о назначении руководителя, Лист записи (в том числе скан-копию или фотографию паспорта (разворот с фотографией и данными о регистрации) лица, имеющего право действовать от имени Продавца без доверенности, либо лица, действующего по доверенности, с приложением скана доверенности.</p></li>
                <li><span>2.3</span><p>Порядок и условия использования Сайта Продавцом определены Правилами пользования Сайтом (Пользовательским соглашением).</p></li>
              </ol>
            </li>
            <li>
              <p><b>Предмет Договора.</b></p>
              <ol>
                <li><span>3.1</span><p>Продавец поручает, а Партсклаб принимает на себя обязательство за вознаграждение оказывать Продавцу Услуги, а Продавец обязуется принимать и оплачивать Услуги в соответствии с условиями Договора (далее – Услуги).  Продавец передает Партсклаб Товары для их доставки физическим лицам, приобретающим Товары на сайте Партсклаб https://partsclub.ru/ (далее – Покупателям), а Партсклаб организует их доставку до Покупателя, от имени Продавца.</p></li>
                <li><span>3.2</span><p>Партсклаб в соответствии с условиями Договора обязуется совершать по поручению Продавца (далее – Поручение) от своего имени фактические действия по:</p>
                  <ol>
                    <li><span>3.2.1</span><p>приему безналичных платежей от Покупателей в пользу Продавца, осуществляемых в качестве оплаты Товаров в магазине Продавца, оформленных на сервисе Партсклаб;</p></li>
                    <li><span>3.2.2</span><p>перечислению Покупателю денежных средств, возвращаемых Продавцом Покупателю в случае отказа Покупателя от Договора, возврата Товара, а также в иных случаях, предусмотренных Договором;</p></li>
                    <li><span>3.2.3</span><p>рекламе Товаров Продавца посредством размещения изображений Товаров на Сайте;</p></li>
                    <li><span>3.2.4</span><p>передаче вырученных от реализации Товара денежных средств.</p></li>
                  </ol>
                </li>
                <li><span>3.3</span><p>Товар является собственностью Продавца до момента приобретения права собственности на Товар Покупателем.</p></li>
                <li><span>3.4</span><p>Продавец самостоятельно размещает информацию о Товаре на Сайте, согласно требованиям Партсклаб. Товар выставляется с ценой, включающей размер вознаграждения Партсклаб - 10%. Информация о Товаре должна быть достоверной и соответствовать требованиям ФЗ «О рекламе». В случае нарушения данного правила, Партсклаб вправе в одностороннем порядке снять Товара с публикации на Сайте.</p></li>
                <li><span>3.5</span><p>Продавец гарантирует, что Товары, реализация которых осуществляется Продавцом на сервисе Партсклаб, правомерно введены в гражданский оборот на территории Российской Федерации, в частности Товары, реализация которых осуществляется под соответствующим товарным знаком, введены в оборот непосредственно правообладателем соответствующего товарного знака или с его согласия.</p></li>
                <li><span>3.6</span><p>Продавец гарантирует, что предоставленная им для размещения в соответствующих Товарных предложениях информация о Товарах содержит все необходимые сведения, предусмотренные законодательством о защите прав потребителей, а также гарантирует, что Товары, реализуемые Продавцом на сервисе Партсклаб, соответствуют всем требованиям законодательства Российской Федерации, в том числе законодательству о техническом регулировании. Продавец соглашается, что описание Товара соответствует информации, содержащейся в Карточке товара на сервисе Партсклаб. Для целей настоящего пункта, под Карточкой товара понимается страница сервиса Партсклаб, содержащая описание (характеристики) Товара, которому соответствует Товар Продавца, добавленный на сервис Партсклаб.</p></li>
                <li><span>3.7</span><p>В случае если нарушение Продавцом указанных в пп. 3.5, 3.6 Договора требований явилось основанием для предъявления к Партсклаб претензий, исков и/или предписаний по уплате штрафных санкций со стороны государственных органов и/или третьих лиц (в том числе правообладателей и Потребителей), Продавец обязуется незамедлительно по требованию Исполнителя предоставить ему всю запрашиваемую информацию (документы), касающуюся соответствующего Заказа и реализуемых по нему Товаров (услуг), содействовать Партсклаб в урегулировании таких претензий и исков, а также возместить Партсклаб документально подтвержденные убытки (включая судебные расходы, расходы по уплате штрафов), причиненные Партсклаб вследствие предъявления ему таких претензий, исков, предписаний в связи с нарушением прав третьих лиц и/или действующего законодательства РФ Продавцом.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Передача Товаров Партсклаб для их реализации.</b></p>
              <ol>
                <li><span>4.1</span><p>Продавец обязан:</p>
                <ol>
                    <li><span>4.1.1</span><p>Контролировать фактическое наличие размещаемых им Товаров и своевременно обновлять его. В случае отсутствия Товара у Продавца, своевременно обновлять информацию на Сайте;</p></li>
                    <li><span>4.1.2</span><p>Самостоятельно обрабатывать заказы Покупателей;</p></li>
                    <li><span>4.1.3</span><p>Оперативно передавать Товар в логистическую компанию. Доставка Товаров до места передачи в транспортировку осуществляется силами и за счет Продавца, в случаях, когда Продавец желает самостоятельно отвезти Товар для доставки;</p></li>
                    <li><span>4.1.4</span><p>Передать Партсклаб Товар в дату, время и место, указанные на Сайте для осуществления доставки Покупателю. В случае неисполнения данных обязанностей, Партсклаб вправе отказаться от приемки Товара, в отношении которого допущено соответствующее нарушение;</p></li>
                    <li><span>4.1.5</span><p>Обеспечить, на момент передачи Партсклаб Товара, упаковку Товара и его маркировку;</p></li>
                    <li><span>4.1.6</span><p>Корректно указать свое место нахождение для самовывоза и подачи автомобиля курьерской службы, время работы и график.</p></li>
                  </ol>
                </li>
                <li><span>4.2</span><p>Каждая из сторон имеют право отказаться от исполнения Договора полностью или в части. В этом случае Партсклаб возвращает указанный Товар, а Продавец принимает такой Товар.</p></li>
                <li><span>4.3</span><p>Если Продавец становится участником «срочной доставки» он обязан предоставить Товар, который он размещает, в течение часа с момента оформления заказа, для передачи в транспортировку курьеру. Если Продавец не предоставляет Товар в указанные сроки, то Партсклаб вправе наложить на Продавца штраф в размере 1000 рублей.</p></li>
                <li><span>4.4</span><p>В случае нарушений настоящих Правил, Пользовательского соглашения, Партсклаб предупреждает Продавца о нарушениях обязательств по договору, в случае повторных нарушений администрация Партсклаб может без объяснения причин ограничить доступ к Сайту на определённое время либо заблокировать Продавца, что влечет расторжение Договора.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Порядок расчетов.</b></p>
              <ol>
                <li><span>5.1</span><p>Товар подлежит реализации сервисом Партсклаб по цене, указанной Продавцом на Сайте на момент реализации Товара, включающей предоставленные Продавцом скидки на Товар (далее – «Розничной цене, указанной Продавцом») с наценкой сервиса Партсклаб. Розничная цена, указанная Продавцом, включает стоимость Товара, упаковки и маркировки, доставки, иные расходы Продавца, предусмотренные настоящим Договором, а также все применимые косвенные налоги.</p></li>
                <li><span>5.2</span><p>Партсклаб предоставляет Продавцу Отчет ежемесячно до 15 числа месяца, следующего за Отчетным периодом. Отчетный период – период, равный 1 (Одному) календарному месяцу, в течение которого Партсклаб реализовывал Товар от имени Продавца.</p></li>
                <li><span>5.3</span><p>Отчет о продажах предоставляется Продавцу путем размещения на Сайте. Продавец вправе в течение 3 (Трех) рабочих дней с момента размещения Отчета предоставить мотивированные замечания на Отчет. В случае не предоставления замечаний в указанный срок, Отчет о продажах считается утвержденным обеими Сторонами. Продавец обязан самостоятельно отслеживать Сайт.</p></li>
                <li><span>5.4</span><p>Партсклаб выплачивает Продавцу денежные средства, полученные от реализации Товара Покупателям, в течение 10 (десяти) календарных дней с момента следующего после предыдущей выплаты Продавцу, в сумме, указанной в отчете, за минусом своего вознаграждения.</p></li>
                <li><span>5.5</span><p>При исполнении поручения Партсклаб оказывает Продавцу услуги по:</p></li>
                <ul className='list-disc pl-2 md:pl-16'>
                  <li className='pl-0'><p>услуги по размещению Товарных предложений Продавца и предоставлению Продавцу функционала, позволяющего Пользователю заключить договор купли-продажи Товара Продавца на сервисе Партсклаб;</p></li>
                  <li className='pl-0'><p>услуги организации доставки, согласно условиям, указанным в Договоре.</p></li>
                </ul>
                <li><span>5.6</span><p>Размер вознаграждения Партсклаб состоит из наценки, добавляемой сервисом Партсклаб к цене указанной в прайс-листе Продавца.</p></li>
                <li><span>5.7</span><p>Объем и стоимость оказанных услуг определяется в Отчете о продажах. Размещение на Сайте Отчета о продажах и отсутствие возражений Продавца в отношении Отчета о продажах, предъявленных в течение срока, предусмотренного пунктом 5.3. Договора, являются обстоятельствами достаточными для признания оказанных Партсклаб услуг принятыми Продавцом.</p></li>
                <li><span>5.8</span><p>Партсклаб перечисляет Продавцу, полученные от реализации Товара денежные средства за минусом своего вознаграждения.</p></li>
                <li><span>5.9</span><p>Платежные обязательства Партсклаб считаются исполненными с даты списания денежных средств с расчетного счета Партсклаб.</p></li>
                <li><span>5.10</span><p>В случае возврата Товара третьим лицом (Покупателем) Партсклаб не обязан перечислять Продавцу денежные средства за данный Товар, а если уже перечислил, Продавец обязан возвратить Партсклаб сумму за такой Товар в течение 5 (Пяти) календарных дней с момента предъявления Партсклаб требования, либо Партсклаб в одностороннем порядке уменьшает сумму денежных средств, полученных от реализации другого Товара и подлежащих перечислению Продавцу, на стоимость такого Товара.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Порядок изменения Договора.</b></p>
              <ol>
                <li><span>6.1</span><p>Партсклаб вправе в одностороннем порядке вносить изменения и/или дополнения в Договор, а также в любые Правила и иные документы, связанные с организацией работы в рамках сервиса Партсклаб. Изменения и дополнения могут вноситься в том числе в виде новой редакции текста Договора, Правил или иного документа.</p></li>
                <li><span>6.2</span><p>Моментом вступления в силу изменений/дополнений является совершение Продавцом на Сайте действий по принятию изменений/дополнений либо передача Продавцом Партсклаб Товара для реализации после опубликования на Сайте изменений/дополнений в зависимости от того, что произошло ранее. При реализации Товара или исполнении сторонами иных обязательств по Договору до вступления в силу изменений/дополнений к последствиям такой реализации или такого исполнения применяются условия, действовавшие до опубликования изменений/дополнений на Сайте.</p></li>
                <li><span>6.3</span><p>Партсклаб вправе внести изменения в условия Договора, которые опубликованы в сети Интернет на Сайте по ссылке https://partsclub.ru/agreement с предварительным уведомлением о таких изменениях не позднее дня, предшествующего дню изменений. Уведомление осуществляется посредством размещения на Сайте информации о том, что в договор внесены изменения, с указанием конкретных изменений. Продавец обязуется самостоятельно посещать Сайт для ознакомления с изменениями/дополнениями (Правил, иного документа) в новой редакции.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Ответственность Сторон и гарантии.</b></p>
              <ol>
                <li><span>7.1</span><p>Стороны несут ответственность в соответствии с действующим законодательством.</p></li>
                <li><span>7.2</span><p>В случае предъявления к Партсклаб каких-либо претензий, требований, исков со стороны третьих лиц, связанных с:</p></li>
                <ul className='list-disc pl-2 md:pl-16'>
                  <li className='pl-0'><p>нарушением их исключительных прав, вызванных неправомерным введением Товара в гражданский оборот, незаконным использованием в отношении Товара товарных знаков, правообладателями которых являются данные третьи лица, или</p></li>
                  <li className='pl-0'><p>несоответствием Товара требованиям и гарантиям, установленным Договором или законодательством РФ, или</p></li>
                  <li className='pl-0'><p>предоставления не достоверных/поддельных/не соответствующих требованиям законодательства РФ/полученных с нарушением требований законодательства РФ сертификатов/деклараций соответствия, либо нарушения Продавцом установленного Договором срока предоставления документов,</p></li>
                </ul>
                <p className='pl-2 md:pl-10'>Продавец обязуется оказывать Партсклаб необходимое содействие в урегулировании таких претензий, требований, исков, а также возместить Партсклаб все понесенные им убытки, вызванные такими претензиями, требованиями и исками, включая, но не ограничиваясь, суммы штрафов и компенсаций и иные суммы, взысканные судебным актом, вынесенным по делу, прямо или косвенно связанным с таким нарушением, в срок, не превышающий 7 (Семь) рабочих дней с даты получения от Партсклаб соответствующего документально подтвержденного требования.</p>
                <li><span>7.3</span><p>Партсклаб не несет ответственности за косвенные убытки или упущенную выгоду Продавца или третьих лиц, независимо от того, мог ли Партсклаб предвидеть причинение таких убытков.</p></li>
                <li><span>7.4</span><p>За нарушение сроков поставки Товара Продавцом  Партсклаб  вправе удержать с Продавца неустойку в размере стоимости услуг курьера. При повторных срывах отгрузки - 10% от суммы просроченного Товара. А в случае выявления публикации неактуальных прайсов, и срывов поставки (отказ Покупателя от исполнения договора) Партсклаб вправе расторгнуть договор в одностороннем порядке и у держать у себя средства в сумме, необходимой для компенсации своих затрат, в том числе затрат на оплату услуг транспортной компании и своего вознаграждения.</p></li>
                <li><span>7.5</span><p>О любых изменениях данных, указанных в заявлении-оферте Покупатель обязуется незамедлительно уведомлять Партсклаб по электронной почте, с досылкой оригинала такого уведомления по почте (либо курьером) по адресу, указанному в Договоре.</p></li>
                <li><span>7.6</span><p>Партсклаб несет ответственность за выполнение условий в соответствии с действующим законодательством, в том числе своевременное выставление отчетов, перечисление денежных средств, причитающихся Продавцу за реализованный Товар.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Уведомления и обмен информацией.</b></p>
              <ol>
                <li><span>8.1</span><p>Любые уведомления, разрешенные и/или необходимые по настоящему Договору, должны направляться уведомляющей Стороной в адрес уведомляемой Стороны по электронной почте, через Личный кабинет, курьером или почтой. Если иное не указано в Договоре, уведомление считается доставленным с момента его получения уведомляемой Стороной. Для целей отправки информации Продавцу используется адрес электронной почты, указанный в заявлении-оферте и в Личном кабинете Продавца.</p></li>
                <li><span>8.2</span><p>В случае обмена информации через Личный кабинет ознакомление с информацией в Личном кабинете находится в пределах контроля и ответственности соответствующей Стороны, которая должна самостоятельно отслеживать появление и изменение информации, уведомлений и документов в Личном кабинете.</p></li>
                <li><span>8.3</span><p>Стороны согласовали, что Отчёты, Акты, счета, уведомления, любые юридически значимые сообщения могут направляться Сторонами через Личный кабинет или электронную почту в виде электронного образа соответствующего документа и будут считаться полученными на 3-й день после их отправления.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Конфиденциальность.</b></p>
              <ol>
                <li><span>9.1</span><p>Под конфиденциальной информацией в Договоре понимается любая информация, передаваемая одной Стороной другой Стороне в любой возможной форме (устной, письменной, электронной, иной), которая имеет действительную или потенциальную коммерческую ценность в силу неизвестности ее третьим лицам, к которой нет свободного доступа на законном основании и обозначенная Передающей Стороной как конфиденциальная (далее — «Конфиденциальная Информация»). К конфиденциальной информации относятся, в том числе передаваемые Исполнителю персональные данные физических лиц. Стороны предпринимают меры по недопущению раскрытия конфиденциальной информации третьим лицам или распространению конфиденциальной информации без согласия раскрывающей Стороны, за исключением случаев, предусмотренных действующим законодательством.</p></li>
                <li><span>9.2</span><p>Каждая из Сторон предпримет все необходимые меры для защиты Конфиденциальной Информации как минимум с такой же степенью тщательности, с какой она защищает собственную конфиденциальную информацию. Доступ к Конфиденциальной Информации будет предоставлен только тем сотрудникам каждой из Сторон, которым он обоснованно необходим для выполнения служебных обязанностей, связанных с исполнением Договора. Партсклаб для направления Продавцу сообщений, в том числе содержащих Конфиденциальную информацию, вправе использовать любые предусмотренные п. 7.3. Договора способы, включая рассылку электронной почтой по незащищенным каналам связи; Партсклаб вправе привлекать для передачи таких сообщений и/или оказания сопутствующих услуг сторонние сервисы и/или организации по выбору Исполнителя. Стороны признают указанный порядок обращения с Конфиденциальной информацией Продавца надлежащим.</p></li>
                <li><span>9.3</span><p>Конфиденциальная Информация всегда остается собственностью передающей Стороны и не должна копироваться или иным способом воспроизводиться без предварительного письменного согласия передающей Стороны.</p></li>
                <li><span>9.4</span><p>Обязательство сохранять в тайне Конфиденциальную Информацию передающей Стороны не распространяется на информацию, которая:</p></li>
                <ul className=''>
                  <li className='pl-0'><p>на момент раскрытия являлась или стала всеобщим достоянием, иначе как вследствие нарушения, допущенного принимающей Стороной; или</p></li>
                  <li className='pl-0'><p>становится известной принимающей Стороне из источника, иного, чем передающая Сторона, без нарушения принимающей Стороной условий Договора, что может быть удостоверено документами, достаточными для подтверждения того, что источником получения Конфиденциальной Информации является третья сторона; или</p></li>
                  <li className='pl-0'><p>была известна принимающей Стороне до ее раскрытия по Договору, что подтверждается документами, достаточными для установления факта обладания Конфиденциальной Информацией; или была раскрыта с письменного разрешения передающей Стороны;</p></li>
                  <li className='pl-0'><p>предоставление которой является обязательством соответствующей Стороны в соответствии с Договором.</p></li>
                </ul>
                <li><span>9.5</span><p>Продавец обязуется обеспечить конфиденциальность и безопасность полученных в связи с Договором от Исполнителя персональных данных физических лиц (Потребителей) при их обработке, хранить эти персональные данные не дольше, чем этого требуют цели их обработки и уничтожить их по достижении целей обработки или в случае утраты необходимости в их достижении, при необходимости по требованию Исполнителя подтверждать, что указанные персональные данные уничтожены.</p></li>
                <li><span>9.6</span><p>Продавец вправе использовать персональные данные Покупателя, оформившего Заказ на сервисе Партсклаб, и переданные ему сервисом Партсклаб, исключительно для целей исполнения Продавцом договора с Потребителем, заключенного Продавцом с Потребителем при оформлении последним Заказа на сервисе Партсклаб.</p></li>
                <li><span>9.7</span><p>Любое иное использование персональных данных Пользователя/Потребителя Продавцом запрещается, за исключением случаев, когда Продавцом получено согласие Пользователя/Потребителя на такое использование в соответствии с требованиями законодательства. При невыполнении Продавцом данного требования Партсклаб вправе расторгнуть Договор с Продавцом с даты направления соответствующего уведомления Продавцу.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Срок действия Договора и порядок его расторжения.</b></p>
              <ol>
                <li><span>10.1</span><p>Настоящий Договор заключается на неопределенный срок и вступает в силу с момента, указанного в п. 2.1 Договора.</p></li>
                <li><span>10.2</span><p>Партсклаб вправе расторгнуть договор в одностороннем порядке с Продавцом, предупредив Продавца за 15 (пятнадцать) календарных дней о предстоящем расторжении, направив уведомление в личном кабинете или на электронную почту Продавца.</p></li>
                <li><span>10.3</span><p>Продавец вправе расторгнуть договор в одностороннем порядке, предупредив Партсклаб за 15 (пятнадцать) календарных дней о предстоящем расторжении договора, посредством направления уведомления через личный кабинет.</p></li>
                <li><span>10.4</span><p>С момента расторжения договора, все новые заказы не принимаются, исполнению подлежат заказы, подтвержденные до момента расторжения договора. В течение 30 (тридцати) календарных дней Партсклаб обязуется произвести сверку и окончательные расчеты.</p></li>
                <li><span>10.5</span><p>В случае расторжения настоящего Договора, все обязательства Сторон по Договору, которые в силу своей природы должны продолжать действовать (включая обязательства в отношении конфиденциальности, проведения взаиморасчетов, но не ограничиваясь указанным), остаются в силе после окончания срока действия Договора.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Заключительные положения.</b></p>
              <ol>
                <li><span>11.1</span><p>Продавец обязан уведомить Партсклаб об изменении места нахождения, банковских реквизитов, контактных телефонов, адресов электронной почты, не позднее чем в течение 2 рабочих дней со дня такого изменения. Обязанности Партсклаб, исполненные до такого уведомления по старым адресам и реквизитам, признаются исполненными надлежащим образом. Адрес на сайте Продавца всегда должен быть актуальным. На Продавца возлагается обязанность обеспечить актуальность контактных данных на своем сайте.</p></li>
                <li><span>11.2</span><p>Любая переписка Сторон, включая направление уведомлений, претензий, первичных документов, осуществляется исключительно через Сайт и почту Продавца, указанную в личном кабинете и заявлении-оферте.</p></li>
                <li><span>11.3</span><p>Продавец соглашается, что использование им логина (login) и пароля (password), является надлежащей и достаточной идентификацией Продавца при входе на Сайт (в аккаунт Продавца), подтверждением права совершать операции в Сайте и является аналогом собственноручной подписи Продавца, а операции и сделки, совершенные им в аккаунте на Сайте, считаются совершенными в простой письменной форме. В случае если Продавец предоставит третьим лицам доступ к аккаунту на Сайте с использованием своих логина (login) и пароля (password), Продавец в полном объеме отвечает за любые действия и бездействие таких лиц, совершенных (допущенных) ими при использовании такого аккаунта, как за свои собственные. Продавец обязан обеспечить безопасное и конфиденциальное хранение логина (login) и пароля (password), используемых для входа на Сайт. В случае их утраты, включая получение к ним доступа третьими лицами, Продавец обязан не использовать такие данные и незамедлительно уведомить об этом Партсклаб для их изменения.</p></li>
                <li><span>11.4</span><p>Все споры и разногласия, возникающие между Сторонами по Договору или в связи с ним, подлежат досудебному претензионному урегулированию. Претензия должна быть составлена в письменной форме. К претензии должны быть приложены и в ее тексте должны быть указаны документы и сведения, необходимые для рассмотрения претензии по существу. Другая Сторона обязана ответить на предъявленную претензию в течение 10 (Десяти) календарных дней со дня ее получения. В случае не достижения согласия спор подлежит разрешению в Арбитражном суде г. Москвы.</p></li>
                <li><span>11.5</span><p>Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по Договору, если это неисполнение явилось следствием обстоятельств непреодолимой силы, возникших после заключения Договора, в результате событий чрезвычайного характера, которые Партсклаб, либо Продавец не могли предвидеть и предотвратить.</p></li>
                <li><span>11.6</span><p>Сторона, ссылающаяся на действие обстоятельств непреодолимой силы, обязана немедленно информировать другую Сторону о наступлении подобных обстоятельств и подтвердить наличие таких обстоятельств. Подтверждением наличия обстоятельств непреодолимой силы является документ, выданный уполномоченным органом власти или территориальным отделением Торгово-промышленной палаты России.</p></li>
                <li><span>11.7</span><p>В случае возникновения обстоятельств непреодолимой силы срок выполнения обязательств по Договору отодвигается соразмерно времени, в течение которого действуют такие обстоятельства и их последствия.</p></li>
                <li><span>11.8</span><p>В случае продолжительности обстоятельств непреодолимой силы более одного месяца, каждая Сторона вправе в одностороннем внесудебном порядке отказаться от исполнения Договора путем направления письменного уведомления о расторжении с указанием даты такого расторжения.</p></li>
              </ol>
            </li>
            <li>
              <p><b>Реквизиты Партсклаб.</b></p>
              <p>ООО «Брусника холдниг»,</p>
              <p>Российская Федерация, 123007 г. Москва ш. Хорошёвское, 23 корп. 2 оф 4</p>
              <p>ИНН/КПП 7720826837/771401001</p>
              <p>р/счет 40702810402610001377 АО «АЛЬФА-БАНК » г. Москва</p>
              <p>к/счет 30101810200000000593</p>
              <p>БИК 044525593</p>
              <p>Электронная почта: info@partsclub.ru</p>
              <p><a className='text-green' href="/docs/supplier_agreement.docx">Скачать договор</a></p>
            </li>
          </ol>
        </div>
      </PageLayout>
      <style jsx>{`
        p {
          margin: 0 0 8px 15px;
        }
        li {
          padding: 0;
          position: relative;
        }
        ul > li > p {
          margin: 0 0 8px 0;
        }
        ul {
          padding: 0 0 0 8px;
          margin: 0 0 0 10px;
          list-style-type: disc;
        }
        span {
          position: absolute;
          left: -13px;
        }
        @media (min-width: 768px) {
          p {
            margin: 0 0 12px 0;
          }
          ul {
            padding: 0 0 0 45px;
            list-style-type: disc;
          }
          li {
            padding: 0 0 0 40px;
            position: relative;
          }
          span {
            position: absolute;
            left: 0;
          }
        }
      `}</style>
    </PageWrapper>
  )
}

export default Contract;
