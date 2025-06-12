//親要素Page
import EmployeeCard from './EmployeeCard';
const PiratesPage = () => {
  const crew = [
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-Y7rgTcW5NdDkxvwMW4Gdj2Q3G3lZVBvHHC10A3T_Iwxj0257NbTbdhvWKFOqn7nxXw6-V4P_0VFuJZ_5cQSDPxlazFKTD9N-d1A0IrX0k7LoaVpG3X9IwQ48H0zfXTJOT1JntRr0Lq3o/s1048/onepiece01_luffy.png',
      name: 'モンキー・D・ルフィ',
      post: 'キャプテン',
      email: 'luffy@mugiwara.com'
    },
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkZ57Udi7AA5MRw4uzcx9M4R0J8PK03fIjZaaRlCLWBW5gBtnZpuCWLbao925kYGJy0HNcxEf9NcfbHFyuraKrY-4WhkFV01Ufut5cDeRpuiZ5cewk8CCQUD2v178dm67n_DqoHUrr_s-K/s1041/onepiece02_zoro_bandana.png',
      name: 'ロロノア・ゾロ',
      post: '副キャプテン',
      email: 'zoro@mugiwara.com'
    },
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtRfZsghuLTIyRzywbowxR_q3dtXJn33kub2lS7_pDSVeNlHKveWnsHjGOikcQlg6pgZT63i43SgAcJosU2mES_ZKK-f6G9qWvDViXOtBiDRMEDjQJOGghw-ZSUFYXZ1P01l5ZN0gkANI-/s1055/onepiece03_nami.png',
      name: 'ナミ',
      post: '航海士',
      email: 'nami@mugiwara.com'
    },
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj18nW531IgK-iMdDF7hkgiBBZBeawHXRLFdE5gtYW80WMZWwO-BXuqbzvvMAxbd3l0xvXVFTRtlMdbEku9xJw2u3Hdux3JPGoaUd9Yf9SRuHINdZO-_F6xHsbAceS8D1QyU-OLn1KVCEHJ/s400/onepiece06_chopper2.png',
      name: 'トニートニーチョッパ',
      post: '医師',
      email: 'chopper@mugiwara.com',
    },
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb915nunoRAuBcf2adDTT6Fr8_1ZDE01Ub0VKqNROZTAF-6hAt_f-1MZZxBfa3-OOIbxPvP3-3d3hBJdofYgYtysdgEZHVVkOEORkGoHxeYiU75aESvdKnxIuzZCr4RsjHe2SoUMfS3PEo/s400/onepiece05_sanji.png',
      name: 'サンジ',
      post: '料理人',
      email: 'sanji@mugiwara.com'
    },
    {
      icon: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgb_FkfaAWLeM3alcb5YOVmXPC2jsBEuuTQ8mplw5B-cnvd8LlExSr_3u7ybNGyT2TRzckrJSLOaY88DIuP6PVCCXxnMCY-a8b1SurHeEhWijrpmRnRpCWV6bw9LRiQghkECdemI4l2oebS/s1151/onepiece07_robin.png',
      name: 'ニコ・ロビン',
      post: '学者',
      email: 'robin@mugiwara.com'
    }
  ];
  return (
    <div>
      <h1 className="top-title">海賊プロフィール</h1>
      {crew.map((member, index) => (
        <EmployeeCard
          key={index}
          name={member.name}
          post={member.post}
          email={member.email}
          icon={member.icon}
        />
      ))}
    </div>
  );
}
export default PiratesPage;