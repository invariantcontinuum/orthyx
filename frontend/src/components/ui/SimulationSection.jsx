import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const personas = ['devops', 'journalism', 'compliance'];

// Simulated graph data
const graphData = {
  devops: {
    nodes: [
      { id: 'Doc: ADR-042', group: 'Intent', x: 1, y: 5 },
      { id: 'Doc: Security Policy', group: 'Intent', x: 2, y: 5 },
      { id: 'Code: Payment-v1', group: 'Reality', x: 1, y: 2 },
      { id: 'Code: Database', group: 'Reality', x: 2, y: 1 },
      { id: 'Code: API Gateway', group: 'Reality', x: 0, y: 3 },
    ],
    edges: [
      { source: 'Doc: ADR-042', target: 'Code: API Gateway', type: 'rules' },
      { source: 'Code: Payment-v1', target: 'Code: Database', type: 'violation' },
    ],
  },
  journalism: {
    nodes: [
      { id: 'Public: Voting Record', group: 'Intent', x: 1, y: 5 },
      { id: 'Public: Denial Speech', group: 'Intent', x: 3, y: 5 },
      { id: 'Leak: Email Dump', group: 'Reality', x: 1, y: 2 },
      { id: 'Leak: Bank Statement', group: 'Reality', x: 2, y: 1 },
      { id: 'Entity: Shell Corp', group: 'Reality', x: 3, y: 2 },
    ],
    edges: [
      { source: 'Public: Denial Speech', target: 'Entity: Shell Corp', type: 'conflict' },
      { source: 'Leak: Email Dump', target: 'Leak: Bank Statement', type: 'evidence' },
      { source: 'Leak: Bank Statement', target: 'Entity: Shell Corp', type: 'link' },
    ],
  },
  compliance: {
    nodes: [
      { id: 'Law: EU AI Act', group: 'Intent', x: 1, y: 5 },
      { id: 'Policy: Internal Legal', group: 'Intent', x: 3, y: 5 },
      { id: 'CRM: Contract #99', group: 'Reality', x: 2, y: 2 },
      { id: 'CRM: Customer Data', group: 'Reality', x: 1, y: 1 },
    ],
    edges: [
      { source: 'Law: EU AI Act', target: 'Policy: Internal Legal', type: 'rules' },
      { source: 'CRM: Contract #99', target: 'Law: EU AI Act', type: 'violation' },
    ],
  },
};

export default function SimulationSection() {
  const { t } = useTranslation();
  const [persona, setPersona] = useState('devops');
  const [analysisRun, setAnalysisRun] = useState(false);
  const canvasRef = useRef(null);

  const currentData = graphData[persona];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw edges if analysis run
    if (analysisRun) {
      currentData.edges.forEach((edge) => {
        const source = currentData.nodes.find((n) => n.id === edge.source);
        const target = currentData.nodes.find((n) => n.id === edge.target);
        if (source && target) {
          const sx = (source.x / 4) * rect.width;
          const sy = rect.height - (source.y / 6) * rect.height;
          const tx = (target.x / 4) * rect.width;
          const ty = rect.height - (target.y / 6) * rect.height;

          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = edge.type === 'violation' || edge.type === 'conflict' ? '#e11d48' : '#4f46e5';
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      });
    }

    // Draw nodes
    currentData.nodes.forEach((node) => {
      const x = (node.x / 4) * rect.width;
      const y = rect.height - (node.y / 6) * rect.height;
      const isIntent = node.group === 'Intent';

      // Node circle
      ctx.beginPath();
      if (isIntent) {
        ctx.rect(x - 12, y - 12, 24, 24);
      } else {
        ctx.arc(x, y, 12, 0, Math.PI * 2);
      }
      ctx.fillStyle = isIntent ? '#4f46e5' : '#475569';
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Node label
      ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#e2e8f0' : '#1e293b';
      ctx.font = '12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(node.id, x, y - 20);
    });
  }, [persona, analysisRun, currentData]);

  const handlePersonaChange = (newPersona) => {
    setPersona(newPersona);
    setAnalysisRun(false);
  };

  return (
    <section className="py-20 bg-warm-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('home.simulation.title')}</h2>
          <p className="text-slate-600 dark:text-slate-300">{t('home.simulation.subtitle')}</p>
        </div>

        {/* Persona Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          {personas.map((p) => (
            <button
              key={p}
              onClick={() => handlePersonaChange(p)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                persona === p
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {t(`home.simulation.${p}`)}
            </button>
          ))}
        </div>

        {/* Simulation Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel */}
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-warm-200 dark:border-slate-700 p-6 rounded-xl col-span-1 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {t(`home.simulation.scenarios.${persona}.title`)}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                {t(`home.simulation.scenarios.${persona}.desc`)}
              </p>

              <div className="bg-warm-50 dark:bg-slate-700/50 p-4 rounded-lg border border-warm-200 dark:border-slate-600 mb-4">
                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">
                  {t('home.simulation.dataStream')}
                </h4>
                <ul className="space-y-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                  <li>&gt; Ingesting: Data Source... OK</li>
                  <li>&gt; Ingesting: Policy Docs... OK</li>
                  <li>&gt; Ingesting: System Logs... OK</li>
                </ul>
              </div>
            </div>

            <div>
              <button
                onClick={() => setAnalysisRun(true)}
                disabled={analysisRun}
                className={`w-full font-bold py-3 rounded-lg shadow-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                  analysisRun
                    ? 'bg-green-600 text-white cursor-default'
                    : 'bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 text-white'
                }`}
              >
                {analysisRun ? '✓ Analysis Complete' : `🚀 ${t('home.simulation.runAnalysis')}`}
              </button>

              {analysisRun && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded text-red-800 dark:text-red-300 text-sm font-semibold flex items-center gap-2 animate-pulse">
                  <span>⚠️ {t(`home.simulation.scenarios.${persona}.alert`)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Graph Visualization */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl col-span-1 lg:col-span-2 shadow-inner border border-warm-200 dark:border-slate-700">
            <canvas
              ref={canvasRef}
              className="w-full h-[400px] lg:h-[500px]"
              style={{ width: '100%', height: '400px' }}
            />
            {!analysisRun && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-slate-400 text-sm bg-white/80 dark:bg-slate-800/80 px-4 py-2 rounded-lg">
                  Click &quot;Run Graph Analysis&quot; to see connections
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
