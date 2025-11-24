import { useState } from 'react';
import { Menu, X, ChevronRight, Check } from 'lucide-react';

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Header/Navigation */}
            <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SuaMarca
              </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
                                Recursos
                            </a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
                                Preços
                            </a>
                            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">
                                Depoimentos
                            </a>
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Começar Grátis
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 space-y-4">
                            <a href="#features" className="block text-gray-600 hover:text-gray-900">
                                Recursos
                            </a>
                            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">
                                Preços
                            </a>
                            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">
                                Depoimentos
                            </a>
                            <button className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Começar Grátis
                            </button>
                        </div>
                    )}
                </nav>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Transforme Seu Negócio com{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tecnologia
            </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        A solução completa para aumentar sua produtividade e alcançar resultados extraordinários.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center">
                            Começar Agora
                            <ChevronRight className="ml-2" size={20} />
                        </button>
                        <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition font-semibold">
                            Ver Demonstração
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Recursos Poderosos
                        </h2>
                        <p className="text-xl text-gray-600">
                            Tudo que você precisa em um só lugar
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Rápido e Eficiente',
                                description: 'Performance otimizada para garantir a melhor experiência possível.'
                            },
                            {
                                title: 'Segurança Avançada',
                                description: 'Seus dados protegidos com as melhores práticas de segurança.'
                            },
                            {
                                title: 'Suporte 24/7',
                                description: 'Nossa equipe está sempre disponível para ajudar você.'
                            },
                            {
                                title: 'Integração Fácil',
                                description: 'Conecte-se com suas ferramentas favoritas em minutos.'
                            },
                            {
                                title: 'Analytics Detalhado',
                                description: 'Acompanhe métricas e insights em tempo real.'
                            },
                            {
                                title: 'Escalável',
                                description: 'Cresce junto com seu negócio, sem complicações.'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Check className="text-blue-600" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Planos para Todos
                        </h2>
                        <p className="text-xl text-gray-600">
                            Escolha o plano ideal para suas necessidades
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Básico',
                                price: 'R$ 29',
                                features: ['5 Projetos', 'Suporte por Email', '10GB Armazenamento']
                            },
                            {
                                name: 'Profissional',
                                price: 'R$ 79',
                                features: ['Projetos Ilimitados', 'Suporte Prioritário', '100GB Armazenamento', 'Analytics Avançado'],
                                highlighted: true
                            },
                            {
                                name: 'Empresarial',
                                price: 'R$ 199',
                                features: ['Tudo do Pro', 'Suporte 24/7', 'Armazenamento Ilimitado', 'API Access']
                            }
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl ${
                                    plan.highlighted
                                        ? 'bg-blue-600 text-white shadow-xl scale-105'
                                        : 'bg-white border border-gray-200'
                                }`}
                            >
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>/mês</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center">
                                            <Check size={20} className="mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`w-full py-3 rounded-lg font-semibold transition ${
                                        plan.highlighted
                                            ? 'bg-white text-blue-600 hover:bg-gray-100'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                                >
                                    Escolher Plano
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Pronto para Começar?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Junte-se a milhares de empresas que já transformaram seus resultados
                    </p>
                    <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold inline-flex items-center">
                        Criar Conta Grátis
                        <ChevronRight className="ml-2" size={20} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <span className="text-2xl font-bold text-white mb-4 block">SuaMarca</span>
                            <p className="text-gray-400">
                                Transformando negócios através da tecnologia.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Produto</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Recursos</a></li>
                                <li><a href="#" className="hover:text-white transition">Preços</a></li>
                                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Empresa</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                                <li><a href="#" className="hover:text-white transition">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 SuaMarca. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}