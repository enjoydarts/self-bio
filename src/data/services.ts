export interface Service {
  en: string;
  ja: string;
}

export interface ServiceCategory {
  title: { en: string; ja: string };
  items: Service[];
}

export const services: ServiceCategory[] = [
  {
    title: { en: 'Web Development', ja: 'Web開発' },
    items: [
      { en: 'Full-stack Web Application Development', ja: 'Webアプリケーション開発（フルスタック）' },
      { en: 'Prototyping & MVP Development', ja: 'プロトタイピング・MVP開発' },
      { en: 'SaaS Development', ja: 'SaaS開発' },
      { en: 'E-commerce Development', ja: 'ECサイト開発' },
      { en: 'API Design & Development', ja: 'API設計・開発' },
      { en: 'API Integration', ja: 'API統合' },
      { en: 'Frontend Development', ja: 'フロントエンド開発' },
      { en: 'Backend Development', ja: 'バックエンド開発' },
      { en: 'Database Design & Optimization', ja: 'データベース設計・最適化' },
      { en: 'Data Migration', ja: 'データマイグレーション' },
      { en: 'Legacy System Improvement & Refactoring', ja: 'レガシーシステム改善・リファクタリング' },
    ],
  },
  {
    title: { en: 'Testing & Quality Assurance', ja: 'テスト・品質保証' },
    items: [
      { en: 'Test Automation Setup', ja: '自動テスト導入・整備' },
      { en: 'Test Strategy Planning', ja: 'テスト戦略立案' },
      { en: 'E2E Testing Implementation', ja: 'E2Eテスト構築' },
      { en: 'Test Coverage Improvement', ja: 'テストカバレッジ改善' },
      { en: 'Quality Management Process', ja: '品質管理プロセス構築' },
    ],
  },
  {
    title: { en: 'Consulting & Support', ja: 'コンサルティング・サポート' },
    items: [
      { en: 'Technology Selection & Architecture Design', ja: '技術選定・アーキテクチャ設計' },
      { en: 'Code Review', ja: 'コードレビュー' },
      { en: 'Performance Optimization', ja: 'パフォーマンス最適化' },
      { en: 'Technical Debt Resolution', ja: '技術的負債の解消' },
      { en: 'Project Recovery & Rescue', ja: '既存プロジェクトのリカバリー・救済' },
      { en: 'Agile Development Adoption', ja: 'アジャイル開発導入支援' },
      { en: 'Technical Advisor', ja: '技術顧問' },
      { en: 'Scrum Master', ja: 'スクラムマスター' },
      { en: 'Engineer Training & Development', ja: 'エンジニア育成' },
      { en: 'Technical Mentoring', ja: '技術メンタリング' },
      { en: 'Team Development Support', ja: 'チーム開発サポート' },
    ],
  },
  {
    title: { en: 'Infrastructure & DevOps', ja: 'インフラ・DevOps' },
    items: [
      { en: 'CI/CD Pipeline Setup', ja: 'CI/CDパイプライン構築' },
      { en: 'Cloud Infrastructure Design', ja: 'クラウドインフラ設計' },
      { en: 'Server Configuration & Management', ja: 'サーバー構成・管理' },
      { en: 'Monitoring & Alert Setup', ja: 'モニタリング・アラート設定' },
    ],
  },
];
