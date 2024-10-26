import React, { useState } from 'react';
import './index.css';
interface Doctor {
  name: string;
  code: string;
}
const doctors:Doctor[] = [
  { name: "陳楷文", code: "INT21" },
  { name: "呂孟銓", code: "INT117" },
  { name: "林耕民", code: "TRE12" },
  { name: "蔡松樵", code: "INT106" },
  { name: "鐘培碩", code: "INT36" },
  { name: "張展源", code: "INT62" },
  { name: "王友立", code: "TRE03" },
  { name: "蘇志偉", code: "SUR46" },
  { name: "曾豐仁", code: "SUR11" },
  { name: "謝長殷", code: "SUR41" },
  { name: "莊奇憲", code: "AL47" },
  { name: "許崇智", code: "AL79" },
  { name: "李嵩濤", code: "AL108" },
  { name: "簡建文", code: "AL111" },
  { name: "羅羿凡", code: "AL112" },
  { name: "歐璿", code: "AL116" },
  { name: "吳文綺", code: "BS30" },
  { name: "李宗翰", code: "TRE14" },
  { name: "龍大永", code: "PED16" },
  { name: "吳宗叡", code: "INT28" },
  { name: "巴重翰", code: "INT64" },
  { name: "孫銘聰", code: "TRE19" },
  { name: "尤仲豪", code: "SUR96" },
  { name: "劉家睿", code: "SUR120" },
  { name: "吳逸騹", code: "SUR09" },
  { name: "郭威廷", code: "SUR118" },
  { name: "李則叡", code: "ENT20" }
];

const MedicalRecordApp = () => {
  const [activeTab, setActiveTab] = useState('History');
  const [activePETab, setActivePETab] = useState('內科');

  const menuItems = [
    { id: 'History', label: 'History' },
    { id: 'PE', label: 'PE' },
    { id: 'Plan', label: 'Plan' },
    { id: 'Diagnosis', label: '診斷書' },
    { id: 'DoctorCode', label: '主治醫師代碼' }
  ];

  const renderHistory = () => (
    <div className="p-6">
      <div className="space-y-4">
        <div className="mb-2">
          <p className="text-gray-800 font-medium mb-2">
            The patient who denied systemic disease before. NKA. No op history.
          </p>
          <p className="font-semibold mb-2">Negative findings:</p>
          <p className="text-gray-700 leading-relaxed">
            chills(-), fever(-), cough(-), sputum(-), hemoptysis(-), chest tightness(-), chest pain(-), 
            refer pain(-), cold sweating(-), SOB(-), DOE(-), PND(-), orthopnea(-), abdominal pain(-), 
            anorexia(-), dysphagia(-), nausea(-), vomiting(-), constipation(-), diarrhea(-), 
            hematemesis(-), tarry stools(-), hematochezia(-), urgency(-), burning sensation(-), 
            frequency(-), dysuria(-), hematuria(-), oligouria(-), body weight loss(-)
          </p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">TOCC history:</h3>
          <ul className="list-disc pl-6">
            <li>Occupation:</li>
            <li>Cluster/contact history: Nil</li>
            <li>Traveling history: Nil</li>
          </ul>
        </div>

        <div className="mt-4">
          <p className="font-semibold mb-2">CAD risk factors:</p>
          <p>DM (-), HTN (-), hyperlipidemia (-), smoking (-), family history (-), 
          Old age (-) Male (-) Post menopause (-)</p>
        </div>

        <div className="mt-4">
          <p>G0P0A0, LMP: 110/9/30, I/D: 28/4, menarche on 13 yo and no abdominal OP history. 
          menorrhagia( ), dysmenorrhea( )</p>
        </div>
      </div>
    </div>
  );

  const renderPE = () => (
    <div className="p-6">
      <div className="mb-6 border-b">
        <nav className="flex space-x-4">
          {['內科', '外科', 'OHCA'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActivePETab(tab)}
              className={`pb-2 px-4 text-base font-medium transition-colors duration-200 
                ${activePETab === tab 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-4 text-sm">
        {activePETab === '內科' && (
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Consciousness</h3>
              <p>Clear GCS: E4M6V5</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div>
                <h3 className="font-semibold">Skin</h3>
                <p>Normal skin turgor</p>
              </div>

              <div>
                <h3 className="font-semibold">HEENT</h3>
                <p>Intact. No icteric sclera. No anemic conjunctiva, OU.</p>
                <p>No congestion over pharyngeal wall.</p>
              </div>

              <div>
                <h3 className="font-semibold">Neck</h3>
                <p>Supple. No JVE noted.</p>
              </div>

              <div>
                <h3 className="font-semibold">Chest</h3>
                <p>Symmetrical expension. Clear breathing sounds.</p>
                <p>Rale(-), Rhonchi(-), Wheezing(-)</p>
              </div>

              <div>
                <h3 className="font-semibold">Heart</h3>
                <p>Regular heart beat</p>
              </div>

              <div>
                <h3 className="font-semibold">Abdomen</h3>
                <p>Soft and flat. Normal bowel sound.</p>
                <p>No tenderness. No rebounding pain.</p>
              </div>

              <div>
                <h3 className="font-semibold">Extremities</h3>
                <p>Free of ROM</p>
              </div>

              <div>
                <h3 className="font-semibold">Neurology</h3>
                <p>Babinski sign: absent, bil. MP: 5, all limbs.</p>
              </div>
            </div>
          </div>
        )}

        {activePETab === '外科' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h3 className="font-semibold">Consciousness</h3>
                <p>Clear GCS: E4M6V5, pupil: 2+/2+</p>
              </div>

              <div>
                <h3 className="font-semibold">Skin</h3>
                <p>Multiple abrasion wounds of</p>
              </div>

              <div>
                <h3 className="font-semibold">Neck</h3>
                <p>Supple. No JVE noted.</p>
              </div>

              <div>
                <h3 className="font-semibold">Chest</h3>
                <p>Symmetrical expension. breathing sound+, bil</p>
              </div>

              <div>
                <h3 className="font-semibold">Heart</h3>
                <p>Regular heart beat.</p>
              </div>

              <div>
                <h3 className="font-semibold">Abdomen</h3>
                <p>Soft and flat. No tenderness.</p>
              </div>

              <div>
                <h3 className="font-semibold">Extremities</h3>
                <p>Free of ROM.</p>
              </div>

              <div>
                <h3 className="font-semibold">Neurology</h3>
                <p>Babinski sign: absent, bil. MP: 5, all limbs.</p>
              </div>
            </div>
          </div>
        )}

        {activePETab === 'OHCA' && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div>
                <h3 className="font-semibold">Consciousness</h3>
                <p>Coma GCS: E1M1V1</p>
              </div>

              <div>
                <h3 className="font-semibold">Skin</h3>
                <p>Normal skin turgor, no skin rash</p>
              </div>

              <div>
                <h3 className="font-semibold">Neck</h3>
                <p>Supple. no palpable pulsation.</p>
              </div>

              <div>
                <h3 className="font-semibold">Chest</h3>
                <p>No breath sound.</p>
              </div>

              <div>
                <h3 className="font-semibold">Heart</h3>
                <p>No heart beat.</p>
              </div>

              <div>
                <h3 className="font-semibold">Abdomen</h3>
                <p>Soft and ovoid</p>
              </div>

              <div>
                <h3 className="font-semibold">Extremities</h3>
                <p>No obvious wound over four limbs</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderDiagnosis = () => (
    <div className="p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">診斷證明書</h2>
        </div>

        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            病患因上述疾病於民國113年
            <span className="mx-2 border-b border-black px-4">__</span>月
            <span className="mx-2 border-b border-black px-4">__</span>日
            <span className="mx-2 border-b border-black px-4">__</span>時
            <span className="mx-2 border-b border-black px-4">__</span>分至
            <span className="mx-2 border-b border-black px-4">__</span>時
            <span className="mx-2 border-b border-black px-4">__</span>分
            期間至本院急診就診並接受檢查，建議休養三日並門診追蹤複查。
          </p>
        </div>
      </div>
    </div>
  );

  const renderDoctorCode = () => (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-6">主治醫師代碼</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {doctors.map((doctor, index) => (
              <div key={index} className="p-4 rounded bg-gray-50">
                <p className="text-gray-800">
                  {doctor.name} <span className="font-mono text-blue-600">{doctor.code}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'History':
        return renderHistory();
      case 'PE':
        return renderPE();
      case 'Plan':
        return <div className="p-6">
          <div className="space-y-4">
            <p>已告知細微骨裂未能完全於急診X光片能診斷出，若出院後持續疼痛需立即返診評估。</p>
            <p>已詳細向病患與家屬解釋可能之病程變化與相關併發症，病人本人及家屬清楚明白。opd f/u and inform of toxic signs</p>
          </div>
        </div>;
      case 'Diagnosis':
        return renderDiagnosis();
      case 'DoctorCode':
        return renderDoctorCode();
      default:
        return renderHistory();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-48 bg-white shadow-lg">
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.id === 'PE') {
                  setActivePETab('內科');
                }
              }}
              className={`w-full py-3 px-4 text-left hover:bg-gray-100 transition-colors duration-200
                ${activeTab === item.id ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' : 'text-gray-600'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-auto bg-white m-4 rounded-lg shadow-lg">
        {renderContent()}
      </div>
    </div>
  );
};

export default MedicalRecordApp;
