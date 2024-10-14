import dotnetImage from '../assets/images/categories/dotnet.jpg';
import database from '../assets/images/categories/efcore.jpg';
import aspnetcore from '../assets/images/categories/aspnet.jpg';
import designPatterns from '../assets/images/categories/design-patterns.jpg';
import blazor from '../assets/images/categories/blazor.jpg';
import csharp from '../assets/images/categories/csharp.jpg';
import ui from '../assets/images/categories/ui-libraries.jpg';
import azure from '../assets/images/categories/azure.jpg';
import o365 from '../assets/images/categories/o365.jpg';

export const CATEGORIES = [
	{ name: 'AccountingTechnician', description: 'Accounting technicians handle day-to-day money and finance tasks for all types of business.', image: database },
	{ name: 'AdminAssistant', description: 'Admin assistants give support to businesses by organising meetings, typing documents and updating computer records.', image: designPatterns },
	{ name: 'ArtsAdministrator', description: 'Arts administrators help organise exhibitions, manage staff and look after buildings like museums.', image: aspnetcore },
	{ name: 'AssistantImmigrationOfficer', description: 'Assistant immigration officers check that people have the right to visit or stay in the UK.', image: dotnetImage },
	{ name: 'Auditor', description: 'Internal and external auditors check organisations financial records and procedures to make sure they are accurate and efficient.', image: blazor },
	{ name: 'BidWriter', description: 'Bid writers prepare documents used to request contracts to provide services or apply for funding.', image: csharp },
	{ name: 'BilingualSecretary', description: 'Bilingual secretaries provide administrative services in English and one or more foreign languages.', image: ui },
	{ name: 'Bookkeeper', description: 'Bookkeepers keep financial records up to date and help prepare accounts.', image: azure },
	{ name: 'BorderForceOfficer', description: 'Border Force officers protect UK border entry points like ports and airports, by enforcing immigration and customs regulations.', image: o365 }
] as const;