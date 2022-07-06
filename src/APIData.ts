/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   data.ts                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: W2Wizard <w2.wizzard@gmail.com>              +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/07/06 01:23:54 by W2Wizard      #+#    #+#                 */
/*   Updated: 2022/07/06 01:23:54 by W2Wizard      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

const APIData = [
	{
		"state": "done",
		"final_mark": 100,
		"id": 864,
		"kind": "project",
		"name": "CPP Module 01",
		"x": 3329,
		"y": 2519,
		"by": [],
		"project_id": 1339,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must have validated cpp-module-00. You must not have those projects ongoing or validated: old-cpp-module-08",
		"description": "This module is designed to help you understand the memory allocation, reference, pointers to members and the usage of the switch in CPP.",
		"slug": "cpp-module-01"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 974,
		"kind": "project",
		"name": "multilayer-perceptron",
		"x": 1978,
		"y": 2120,
		"by": [
			{
				"parent_id": 1453,
				"points": [
					[
						1978,
						2120
					],
					[
						1953,
						2297
					]
				]
			}
		],
		"project_id": 1457,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-dslr",
		"description": "Subject created by the 42AI association. This project is an introduction to artificial neural networks thanks to the implementation of a multilayer perceptron.",
		"slug": "42cursus-multilayer-perceptron"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1020,
		"kind": "project",
		"name": "total-perspective-vortex",
		"x": 1820,
		"y": 2202,
		"by": [
			{
				"parent_id": 1453,
				"points": [
					[
						1820,
						2202
					],
					[
						1953,
						2297
					]
				]
			}
		],
		"project_id": 1460,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have validated 1 of 42cursus-dslr and dslr. You must have finished quest(s) common-core",
		"description": "Learn to use python tools to process large dimension data, and create a man-machine interface thanks to brainwaves.",
		"slug": "42cursus-total-perspective-vortex"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 989,
		"kind": "project",
		"name": "dslr",
		"x": 1953,
		"y": 2297,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1953,
						2297
					],
					[
						2169,
						2445
					]
				]
			}
		],
		"project_id": 1453,
		"difficulty": 6000,
		"duration": "about 14 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Subject created by the 42AI association. Discover Data Science in the projects where you re-constitute Poudlard’s Sorting Hat. Warning: this is not a subject on cameras.",
		"slug": "42cursus-dslr"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 992,
		"kind": "project",
		"name": "ft_linear_regression",
		"x": 2120,
		"y": 2290,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2120,
						2290
					],
					[
						2061,
						2374
					]
				]
			}
		],
		"project_id": 1391,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project will be your first steps into AI and Machine Learning. You're going to start with a simple, basic machine learning algorithm. You will have to create a program that predicts the price of a car by using a linear function train with a gradient descent algorithm.",
		"slug": "42cursus-ft_linear_regression"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1016,
		"kind": "project",
		"name": "h42n42",
		"x": 3870,
		"y": 3793,
		"by": [
			{
				"parent_id": 1403,
				"points": [
					[
						3870,
						3793
					],
					[
						3738,
						3814
					]
				]
			}
		],
		"project_id": 1429,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "Project introducing Framework OCSIGEN, used to create applications rich in OCaml. Design a simulator of bugs escaping a dangerous virus.",
		"slug": "42cursus-h42n42"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 952,
		"kind": "project",
		"name": "ft_ality",
		"x": 3823,
		"y": 3925,
		"by": [
			{
				"parent_id": 1403,
				"points": [
					[
						3823,
						3925
					],
					[
						3737,
						3816
					]
				]
			}
		],
		"project_id": 1407,
		"difficulty": 4200,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-ft_turing",
		"description": "This project will get you acquainted with problems linked to automatic syntax analysis (“parsin”) by studying finite automation in a combat game.",
		"slug": "42cursus-ft_ality"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 957,
		"kind": "project",
		"name": "ft_turing",
		"x": 3737,
		"y": 3816,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3737,
						3816
					],
					[
						3670,
						3739
					]
				]
			}
		],
		"project_id": 1403,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "ft_turing will help you discover the turing model using imperative programming through an implementation of this model with OCaml",
		"slug": "42cursus-ft_turing"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 986,
		"kind": "project",
		"name": "cloud-1",
		"x": 2158,
		"y": 2140,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2158,
						2140
					],
					[
						2303,
						2283
					]
				]
			}
		],
		"project_id": 1414,
		"difficulty": 9450,
		"duration": "about 100 hours",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project is an introduction to cloud servers",
		"slug": "42cursus-cloud-1"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5886,
		"kind": "project",
		"name": "Inception-of-Things",
		"x": 2321,
		"y": 2164,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2321,
						2164
					],
					[
						2255,
						2235
					]
				]
			}
		],
		"project_id": 2064,
		"difficulty": 25450,
		"duration": "about 200 hours",
		"rules": "You must have finished quest(s) common-core",
		"description": " This project aims to introduce you to kubernetes from a developer perspective.\n You will have to set up small clusters and discover the mechanics of continuous integration.\n At the end of this project you will be able to have a working cluster in docker and have a usable continuous integration for your applications.",
		"slug": "inception-of-things"
	},
	{
		"state": "done",
		"final_mark": 115,
		"id": 5339,
		"kind": "project",
		"name": "pipex",
		"x": 3219,
		"y": 2747,
		"by": [],
		"project_id": 2004,
		"difficulty": 1142,
		"duration": "about 50 hours",
		"rules": "You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: minishell, 21sh, 42sh, and minitalk",
		"description": "  This project aims to make you understand a bit deeper two concepts that you already know: the redirections and the pipes. It is an introduction project.\n",
		"slug": "pipex"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5341,
		"kind": "project",
		"name": "so_long",
		"x": 3332,
		"y": 2985,
		"by": [],
		"project_id": 2009,
		"difficulty": 1000,
		"duration": "about 60 hours",
		"rules": "You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: fract-ol, 42cursus-fract-ol, and 42cursus-fdf",
		"description": "This project is a small 2D game with minilibx. You'll learn about textures, sprites and tiles.",
		"slug": "so_long"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5981,
		"kind": "project",
		"name": " Bgp At Doors of Autonomous Systems is Simple",
		"x": 2409,
		"y": 2061,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2409,
						2061
					],
					[
						2471,
						2152
					]
				]
			}
		],
		"project_id": 2071,
		"difficulty": 22450,
		"duration": "about 200 hours",
		"rules": "You must have finished quest(s) common-core",
		"description": "The purpose of this project is to deepen your knowledge of NetPractice.\n You will have to simulate several networks (VXLAN+BGP-EVPN) in GNS3. ",
		"slug": "bgp-at-doors-of-autonomous-systems-is-simple"
	},
	{
		"state": "done",
		"final_mark": 125,
		"id": 853,
		"kind": "project",
		"name": "Libft",
		"x": 2999,
		"y": 2999,
		"by": [],
		"project_id": 1314,
		"difficulty": 462,
		"duration": "about 70 hours",
		"rules": "You must not have validated libft",
		"description": "This project is your very first project as a student at 42. You will need to recode a few functions of the C standard library as well as some other utility functions that you will use during your whole cursus.",
		"slug": "42cursus-libft"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 6184,
		"kind": "project",
		"name": "Python Module 02",
		"x": 1788,
		"y": 2448,
		"by": [
			{
				"parent_id": 1995,
				"points": [
					[
						1788,
						2448
					],
					[
						1920,
						2413
					]
				]
			}
		],
		"project_id": 1996,
		"difficulty": 0,
		"duration": "about 1 day",
		"rules": "You must have validated python-module-01",
		"description": "The goal of this module is to tackle advanced notions of Python.\nYou will learn more about decorators, lambda, context manager, build package,\n",
		"slug": "python-module-02"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 6182,
		"kind": "project",
		"name": "Python Module 01",
		"x": 1920,
		"y": 2413,
		"by": [
			{
				"parent_id": 1984,
				"points": [
					[
						1920,
						2413
					],
					[
						2036,
						2482
					]
				]
			}
		],
		"project_id": 1995,
		"difficulty": 0,
		"duration": "about 1 day",
		"rules": "You must have validated python-module-00",
		"description": "The goal of this module is to get started with the Python language.\nYou will study objects, classes, inheritance, built-in functions, magic methods,\ngenerator ...\n",
		"slug": "python-module-01"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 6181,
		"kind": "project",
		"name": "Python Module 00",
		"x": 2036,
		"y": 2482,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2036,
						2482
					],
					[
						2061,
						2372
					]
				]
			}
		],
		"project_id": 1984,
		"difficulty": 0,
		"duration": "about 1 day",
		"rules": "You must have finished quest(s) common-core",
		"description": "This first module of Python is designed to to get started with the Python language.\nYou will study basic setup, variables, data types, functions, ...\n",
		"slug": "python-module-00"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 985,
		"kind": "project",
		"name": "boot2root",
		"x": 3784,
		"y": 2080,
		"by": [
			{
				"parent_id": 1404,
				"points": [
					[
						3784,
						2080
					],
					[
						3805,
						2232
					]
				]
			}
		],
		"project_id": 1446,
		"difficulty": 11500,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-snow-crash",
		"description": "Security Challenge.In a group, search for various means to pass root on the ISO given to you.",
		"slug": "42cursus-boot2root"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1040,
		"kind": "project",
		"name": "darkly",
		"x": 1602,
		"y": 3521,
		"by": [
			{
				"parent_id": 1482,
				"points": [
					[
						2101,
						3434
					],
					[
						1783,
						3570
					]
				]
			},
			{
				"parent_id": 0,
				"points": [
					[
						1602,
						3521
					],
					[
						1787,
						3568
					]
				]
			}
		],
		"project_id": 1405,
		"difficulty": 6300,
		"duration": "about 14 days",
		"rules": "You must have validated any of quests: web-framework-validated and common-core",
		"description": "Projet introductif à la sécurité en informatique dans le domaine spécifique du web, ce projet va vous faire disséquer un site web vulnérable. Ce faisant, vous allez développer votre propre façon de penser sécurité dans une application web et prendre conscience des problèmes liés à de simples erreurs de développement, autant d'un point de vue programmation que d'un point de vue conception.",
		"slug": "42cursus-darkly"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 999,
		"kind": "project",
		"name": "override",
		"x": 4052,
		"y": 2067,
		"by": [
			{
				"parent_id": 1417,
				"points": [
					[
						4052,
						2067
					],
					[
						3923,
						2126
					]
				]
			}
		],
		"project_id": 1448,
		"difficulty": 35700,
		"duration": "about 28 days",
		"rules": "You must have validated 42cursus-rainfall. You must have finished quest(s) common-core",
		"description": "If you thought Rainfall was easy, here’s a more daunting challenge. Override is last ISO that will have you search for faults present in the protected binaries, and re-build these binaries depending on their behavior.",
		"slug": "42cursus-override"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1003,
		"kind": "project",
		"name": "snow-crash",
		"x": 3808,
		"y": 2233,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3808,
						2233
					],
					[
						3716,
						2302
					]
				]
			}
		],
		"project_id": 1404,
		"difficulty": 9450,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project is an introduction to computer security. Snow Crash will make you discover security in various sub-domains, with a developer-oriented approach. You will become familiar with several languages (ASM/perl/php…), develop a certain logic to understand unknown programs, and become aware of problems linked to simple programming errors",
		"slug": "42cursus-snow-crash"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1008,
		"kind": "project",
		"name": "rainfall",
		"x": 3923,
		"y": 2126,
		"by": [
			{
				"parent_id": 1404,
				"points": [
					[
						3923,
						2126
					],
					[
						3808,
						2233
					]
				]
			}
		],
		"project_id": 1417,
		"difficulty": 25200,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-snow-crash",
		"description": "Rainfall is an iso challenge slightly more complex than Snow Crash. You will have to dive deep into reverse engineering, learn to reconstruct a code, and understand it to detect faults. Will you reach the last level?",
		"slug": "42cursus-rainfall"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 981,
		"kind": "project",
		"name": "swifty-companion",
		"x": 2076,
		"y": 3727,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2076,
						3727
					],
					[
						2220,
						3624
					]
				]
			}
		],
		"project_id": 1395,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project is an introduction to mobile programming. The goal is to create, an application which will allow you to get infosos about 42students, using the API",
		"slug": "42cursus-swifty-companion"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1006,
		"kind": "project",
		"name": "hypertube",
		"x": 1698,
		"y": 3373,
		"by": [
			{
				"parent_id": 1401,
				"points": [
					[
						1698,
						3373
					],
					[
						1758,
						3485
					]
				]
			}
		],
		"project_id": 1402,
		"difficulty": 15750,
		"duration": "about 28 days",
		"rules": "You must have validated 42cursus-matcha. You must have finished quest(s) common-core",
		"description": "Last project in this series, the Hypertube project invites you to discover an extremely powerful tool category: MVC frameworks. You will learn how to manipulate a MVC, in the language of your choice, to create a streaming site of videos downloaded via the BitTorrent protocol.",
		"slug": "42cursus-hypertube"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 946,
		"kind": "project",
		"name": "camagru",
		"x": 1910,
		"y": 3709,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1910,
						3709
					],
					[
						1787,
						3568
					]
				]
			}
		],
		"project_id": 1396,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have validated any of quests: 42-to-42cursus-transfert and common-core",
		"description": "This project is a warmup for web. You will need to realize, a small, instagram-like website allowing its users to create and share photomontage. You will, from scratch, implement basic functionnalities used by any website with a userbase",
		"slug": "42cursus-camagru"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 875,
		"kind": "project",
		"name": "ft_transcendence",
		"x": 3759,
		"y": 3634,
		"by": [],
		"project_id": 1337,
		"difficulty": 24360,
		"duration": "about 245 hours",
		"rules": "You must have finished quest(s) common-core-rank-05",
		"description": "Surprise\n",
		"slug": "ft_transcendence"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 973,
		"kind": "project",
		"name": "matcha",
		"x": 1758,
		"y": 3485,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1758,
						3485
					],
					[
						1790,
						3569
					]
				]
			}
		],
		"project_id": 1401,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have validated any of quests: 42-to-42cursus-transfert and common-core",
		"description": "This second project will introduce a more evolved tool to create your web applications: the micro-framework. We invite you to create, in the language of your choice, a dating site. Interaction between users is the heart of the project!",
		"slug": "42cursus-matcha"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1014,
		"kind": "project",
		"name": "music-room",
		"x": 1605,
		"y": 3671,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1605,
						3671
					],
					[
						1785,
						3568
					]
				]
			}
		],
		"project_id": 1427,
		"difficulty": 25200,
		"duration": "about 28 days",
		"rules": "You must have validated any of quests: 42-to-42cursus-transfert and common-core",
		"description": "Project in partnership with Deezer. In a group, create a complete mobile app of collaborative playlist using the SDK and API of Deezer. On the menu, mobile native development, back-end development and creation of API REST.",
		"slug": "42cursus-music-room"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1015,
		"kind": "project",
		"name": "red-tetris",
		"x": 1770,
		"y": 3743,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1770,
						3743
					],
					[
						1785,
						3568
					]
				]
			}
		],
		"project_id": 1428,
		"difficulty": 15750,
		"duration": "about 21 days",
		"rules": "You must have validated any of quests: 42-to-42cursus-transfert and common-core",
		"description": "The goal of this project is to develop a multiplayer tetris game on the network with a set of software exclusively from Full Stack Javascript.",
		"slug": "42cursus-red-tetris"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 982,
		"kind": "project",
		"name": "swifty-proteins",
		"x": 1954,
		"y": 3826,
		"by": [
			{
				"parent_id": 1395,
				"points": [
					[
						1954,
						3826
					],
					[
						2076,
						3727
					]
				]
			}
		],
		"project_id": 1406,
		"difficulty": 15750,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-swifty-companion",
		"description": "This project will give you the opportunity to create 3D scenes. For the most part, you will make an application that models ligands in 3D. This will also help you to deepen your knowledge of a mobile framework.",
		"slug": "42cursus-swifty-proteins"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 991,
		"kind": "project",
		"name": "ft_hangouts",
		"x": 2248,
		"y": 3790,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2248,
						3790
					],
					[
						2153,
						3675
					]
				]
			}
		],
		"project_id": 1379,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "The goal of this project is to get you acquainted with mobile app development. You will create a contact management mobile app. You will have to understand how an mobile app functions, how mobile manages your application and how to use the SDK",
		"slug": "42cursus-ft_hangouts"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 960,
		"kind": "project",
		"name": "guimp",
		"x": 3570,
		"y": 4015,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3570,
						4015
					],
					[
						3489,
						3873
					]
				]
			}
		],
		"project_id": 1455,
		"difficulty": 12600,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "The goal of this project is to create a graphic interface library. You will have to prove it works correctly with a small 2D image software. This library must as complete and modular as possible, the goal being to re-use it in future projects, whether for projects in the graphic branch or other projects of you training.",
		"slug": "42cursus-guimp"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1022,
		"kind": "project",
		"name": "mod1",
		"x": 3596,
		"y": 3881,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3596,
						3881
					],
					[
						3519,
						3924
					]
				]
			}
		],
		"project_id": 1462,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This simulation graphic project will have you represent a surface in 3D, on which water will flow. Empirical or scientific (with many equations), recreate a wave, a tsunami or maybe just rain on your surface.",
		"slug": "42cursus-mod1"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1005,
		"kind": "project",
		"name": "xv",
		"x": 2931,
		"y": 4236,
		"by": [
			{
				"parent_id": 1409,
				"points": [
					[
						2931,
						4236
					],
					[
						2936,
						4095
					]
				]
			}
		],
		"project_id": 1408,
		"difficulty": 22000,
		"duration": "about 56 days",
		"rules": "You must have validated 42cursus-in-the-shadows. You must have finished quest(s) common-core",
		"description": "This project was designed by the Daher company and has you develop a graphic interface under Unity for optimizing industrial processes.",
		"slug": "42cursus-xv"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 997,
		"kind": "project",
		"name": "in-the-shadows",
		"x": 2936,
		"y": 4095,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2936,
						4095
					],
					[
						2939,
						3996
					]
				]
			}
		],
		"project_id": 1409,
		"difficulty": 9450,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project wants you to develop a complete game using a bit of algo and a lot of creativity.",
		"slug": "42cursus-in-the-shadows"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1002,
		"kind": "project",
		"name": "scop",
		"x": 3252,
		"y": 4057,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3252,
						4057
					],
					[
						3234,
						3973
					]
				]
			}
		],
		"project_id": 1390,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Your first steps in the world of 3D on GPU with OpenGL. You will become acquainted with the main concepts during this small game project.",
		"slug": "42cursus-scop"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 996,
		"kind": "project",
		"name": "ft_vox",
		"x": 3377,
		"y": 4081,
		"by": [
			{
				"parent_id": 1390,
				"points": [
					[
						3377,
						4081
					],
					[
						3249,
						4059
					]
				]
			}
		],
		"project_id": 1449,
		"difficulty": 15750,
		"duration": "about 21 days",
		"rules": "You must have validated 1 of scop and 42cursus-scop. You must have finished quest(s) common-core",
		"description": "ft_vox is a project to introduce the voxel engine, inspired by minecraft, in which you must create a randomly generated world.",
		"slug": "42cursus-ft_vox"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1029,
		"kind": "project",
		"name": "42run",
		"x": 3156,
		"y": 4154,
		"by": [
			{
				"parent_id": 1390,
				"points": [
					[
						3156,
						4154
					],
					[
						3252,
						4057
					]
				]
			}
		],
		"project_id": 1387,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-scop",
		"description": "Vous connaissez Temple Run ? Il est temps de le refaire ! Ce projet intermédiaire d'OpenGL vous invite à recréer ce jeu mobile. Amusez-vous : tous les bonus sont possible pour dépasser la célèbre franchise.",
		"slug": "42cursus-42run"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 961,
		"kind": "project",
		"name": "humangl",
		"x": 3294,
		"y": 4198,
		"by": [
			{
				"parent_id": 1390,
				"points": [
					[
						3294,
						4198
					],
					[
						3252,
						4057
					]
				]
			}
		],
		"project_id": 1394,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-scop",
		"description": "This intermediate openGL project is an introduction to hierarchy modeling. You will learn to use matrices in order to link various parts of a humanoid model, and animate them.",
		"slug": "42cursus-humangl"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1039,
		"kind": "project",
		"name": "bomberman",
		"x": 3432,
		"y": 4197,
		"by": [
			{
				"parent_id": 1394,
				"points": [
					[
						3432,
						4197
					],
					[
						3294,
						4198
					]
				]
			}
		],
		"project_id": 1389,
		"difficulty": 25200,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-humangl",
		"description": "Bomberman, c'est un classique du jeu video : aussi simple dans son gameplay que fun à jouer ! Vous allez ici profiter de sa simplicité pour faire votre premier gros projet de C++ de facture professionnelle. Vous allez recoder une version de Bomberman, en C++ et avec OpenGL, avec pour objectif de réaliser un jeu le plus abouti possible.",
		"slug": "42cursus-bomberman"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5335,
		"kind": "project",
		"name": "ft_newton",
		"x": 3428,
		"y": 4366,
		"by": [
			{
				"parent_id": 1394,
				"points": [
					[
						3428,
						4366
					],
					[
						3290,
						4201
					]
				]
			}
		],
		"project_id": 1962,
		"difficulty": 24360,
		"duration": "about 14 days",
		"rules": "You must have validated 1 of humangl and 42cursus-humangl",
		"description": "basic Physics engine - motion - gravity - collisions",
		"slug": "ft_newton"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 979,
		"kind": "project",
		"name": "shaderpixel",
		"x": 3305,
		"y": 4369,
		"by": [
			{
				"parent_id": 1394,
				"points": [
					[
						3305,
						4369
					],
					[
						3294,
						4218
					]
				]
			}
		],
		"project_id": 1454,
		"difficulty": 15750,
		"duration": "about 21 days",
		"rules": "You must have validated 42cursus-humangl. You must have finished quest(s) common-core",
		"description": "Now that you are familiar with 3D objects and basic rendering techniques, we can get serious now and really work in the space of the graphic card. It’s up to you to design and create the weirdest objects thanks to shaders programming.",
		"slug": "42cursus-shaderpixel"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1078,
		"kind": "project",
		"name": "particle-system",
		"x": 3189,
		"y": 4369,
		"by": [
			{
				"parent_id": 1394,
				"points": [
					[
						3189,
						4369
					],
					[
						3291,
						4218
					]
				]
			}
		],
		"project_id": 1410,
		"difficulty": 15750,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-humangl",
		"description": "This infographics project is an introduction to the wonderful world of GPU. Through OpenGL and OpenCL usage, allowing to parrellelize calculations, you must create a particle system while respecting the performance constraints",
		"slug": "42cursus-particle-system"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 872,
		"kind": "project",
		"name": "ft_irc",
		"x": 2628,
		"y": 2254,
		"by": [],
		"project_id": 1336,
		"difficulty": 21630,
		"duration": "about 175 hours",
		"rules": "You must have validated any of quests: common-core-rank-04 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: irc, webserv, and old-irc",
		"description": "Create your own IRC server in C++, fully compatible with an official client.",
		"slug": "ft_irc"
	},
	{
		"state": "in_progress",
		"final_mark": null,
		"id": 873,
		"kind": "project",
		"name": "webserv",
		"x": 2541,
		"y": 2305,
		"by": [],
		"project_id": 1332,
		"difficulty": 21630,
		"duration": "about 210 hours",
		"rules": "You must have validated any of quests: common-core-rank-04 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: ft_irc",
		"description": "This project is here to make you write your own HTTP server.\nYou will be able to test it with a real browser.\nHTTP is one of the most used protocol on internet.\nKnowing its arcane will be useful, even if you won't be working on a\nwebsite.\n",
		"slug": "webserv"
	},
	{
		"state": "available",
		"final_mark": null,
		"id": 874,
		"kind": "project",
		"name": "ft_containers",
		"x": 2278,
		"y": 3413,
		"by": [],
		"project_id": 1335,
		"difficulty": 10042,
		"duration": "about 140 hours",
		"rules": "You must have validated any of quests: common-core-rank-04 and 42-to-42cursus-transfert",
		"description": "The multiple available containers in C++ all have a very different usage. To make sure you understand them all, let's re-implement them!",
		"slug": "ft_containers"
	},
	{
		"state": "in_progress",
		"final_mark": null,
		"id": 5336,
		"kind": "project",
		"name": "Inception",
		"x": 3460,
		"y": 3692,
		"by": [],
		"project_id": 1983,
		"difficulty": 10042,
		"duration": "about 210 hours",
		"rules": "You must have validated any of quests: common-core-rank-04. You must not have those projects ongoing or validated: docker-1 and docker-deprecated",
		"description": "  This project aims to broaden your knowledge of system administration by using Docker.\n You will virtualize several Docker images, creating them in your new personal virtual machine.\n",
		"slug": "inception"
	},
	{
		"state": "done",
		"final_mark": 80,
		"id": 867,
		"kind": "project",
		"name": "CPP Module 04",
		"x": 3400,
		"y": 2366,
		"by": [],
		"project_id": 1342,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-03",
		"description": "This module is designed to help you understand Subtype polymorphism, abstract classes and interfaces in CPP.",
		"slug": "cpp-module-04"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 868,
		"kind": "project",
		"name": "CPP Module 05",
		"x": 3331,
		"y": 2334,
		"by": [],
		"project_id": 1343,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-04",
		"description": "This module is designed to help you understand Try/Catch and Exceptions in CPP.",
		"slug": "cpp-module-05"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 866,
		"kind": "project",
		"name": "CPP Module 03",
		"x": 3417,
		"y": 2428,
		"by": [],
		"project_id": 1341,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-02",
		"description": "This module is designed to help you understand Inheritance in CPP.",
		"slug": "cpp-module-03"
	},
	{
		"state": "done",
		"final_mark": 80,
		"id": 871,
		"kind": "project",
		"name": "CPP Module 08",
		"x": 3326,
		"y": 2426,
		"by": [],
		"project_id": 1346,
		"difficulty": 9660,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-07",
		"description": "This module is designed to help you understand templated containers, iterators and algorithms in CPP.",
		"slug": "cpp-module-08"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 869,
		"kind": "project",
		"name": "CPP Module 06",
		"x": 3260,
		"y": 2359,
		"by": [],
		"project_id": 1344,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-05",
		"description": "This module is designed to help you understand the different casts in CPP.",
		"slug": "cpp-module-06"
	},
	{
		"state": "done",
		"final_mark": 80,
		"id": 865,
		"kind": "project",
		"name": "CPP Module 02",
		"x": 3391,
		"y": 2494,
		"by": [],
		"project_id": 1340,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-01",
		"description": "This module is designed to help you understand Ad-hoc polymorphism, overloads and orthodox canonical classes in CPP.",
		"slug": "cpp-module-02"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 1063,
		"kind": "project",
		"name": "CPP Module 00",
		"x": 3258,
		"y": 2492,
		"by": [],
		"project_id": 1338,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must have validated any of quests: common-core-rank-03 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: old-cpp-module-08. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "This first module of C++ is designed to help you understand the specifities of the language when compared to C.\nTime to dive into Object Oriented Programming!\n",
		"slug": "cpp-module-00"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 870,
		"kind": "project",
		"name": "CPP Module 07",
		"x": 3235,
		"y": 2424,
		"by": [],
		"project_id": 1345,
		"difficulty": 0,
		"duration": "about 7 hours",
		"rules": "You must not have those projects ongoing or validated: old-cpp-module-08. You must have validated cpp-module-06",
		"description": "This module is designed to help you understand Templates in CPP.",
		"slug": "cpp-module-07"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 5342,
		"kind": "project",
		"name": "NetPractice",
		"x": 2672,
		"y": 3577,
		"by": [],
		"project_id": 2007,
		"difficulty": 3160,
		"duration": "about 50 hours",
		"rules": "You must have validated any of quests: common-core-rank-03 and 42-to-42cursus-transfert",
		"description": "NetPractice is a general practical exercise to let you discover networking.",
		"slug": "netpractice"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 858,
		"kind": "project",
		"name": "miniRT",
		"x": 2452,
		"y": 2624,
		"by": [],
		"project_id": 1315,
		"difficulty": 5775,
		"duration": "about 300 hours",
		"rules": "You must have validated any of quests: common-core-rank-03 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: cub3d, rtv1, wolf3d, rt, doom_nukem, and doom-nukem",
		"description": "This project is an introduction to the beautiful world of Raytracing.",
		"slug": "minirt"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 857,
		"kind": "project",
		"name": "cub3d",
		"x": 2401,
		"y": 2711,
		"by": [],
		"project_id": 1326,
		"difficulty": 5775,
		"duration": "about 280 hours",
		"rules": "You must have validated any of quests: common-core-rank-03 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: minirt, wolf3d, rtv1, rt, doom_nukem, and doom-nukem",
		"description": "This project is inspired by the world-famous eponymous 90's game, which was the first FPS ever. It will enable you to explore ray-casting. Your goal will be to make a dynamic view inside a maze, in which you'll have to find your way.",
		"slug": "cub3d"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 855,
		"kind": "project",
		"name": "Philosophers",
		"x": 2546,
		"y": 3210,
		"by": [],
		"project_id": 1334,
		"difficulty": 3360,
		"duration": "about 70 hours",
		"rules": "You must have validated any of quests: common-core-rank-02 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: philosophers and old-philosophers",
		"description": "",
		"slug": "42cursus-philosophers"
	},
	{
		"state": "done",
		"final_mark": 101,
		"id": 854,
		"kind": "project",
		"name": "minishell",
		"x": 3407,
		"y": 3284,
		"by": [],
		"project_id": 1331,
		"difficulty": 2814,
		"duration": "about 210 hours",
		"rules": "You must have validated any of quests: common-core-rank-02 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: minishell, 21sh, and 42sh",
		"description": "The objective of this project is for you to create a simple shell.",
		"slug": "42cursus-minishell"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5980,
		"kind": "project",
		"name": "fract-ol",
		"x": 3282,
		"y": 3179,
		"by": [],
		"project_id": 1476,
		"difficulty": 1000,
		"duration": "about 60 hours",
		"rules": "You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: 42cursus-fdf, fract-ol, and so_long",
		"description": "Discover 2D programming and the psychedelic universe of fractals in this project, using minilibX.",
		"slug": "42cursus-fract-ol"
	},
	{
		"state": "done",
		"final_mark": 120,
		"id": 5340,
		"kind": "project",
		"name": "FdF",
		"x": 3320,
		"y": 3083,
		"by": [],
		"project_id": 2008,
		"difficulty": 1000,
		"duration": "about 60 hours",
		"rules": "You must not have those projects ongoing or validated: fract-ol, 42cursus-fract-ol, and so_long. You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert",
		"description": "All programs that you wrote until now were executed in text mode on your terminal. Now, let’s discover something more exciting: how to open a graphics window and draw inside? To start your journey in graphic programming, FdF offers to represent “iron wire” meshing in 3D.",
		"slug": "42cursus-fdf"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5338,
		"kind": "project",
		"name": "minitalk",
		"x": 3134,
		"y": 2692,
		"by": [],
		"project_id": 2005,
		"difficulty": 1142,
		"duration": "about 50 hours",
		"rules": "You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: minishell, 21sh, 42sh, and pipex",
		"description": "The purpose of this project is to code a small data exchange program using UNIX signals. It is an introductory project for the bigger UNIX projects that will appear later on in the cursus.\n",
		"slug": "minitalk"
	},
	{
		"state": "done",
		"final_mark": 84,
		"id": 5265,
		"kind": "project",
		"name": "push_swap",
		"x": 2794,
		"y": 2740,
		"by": [],
		"project_id": 1471,
		"difficulty": 1855,
		"duration": "about 60 hours",
		"rules": "You must have validated any of quests: common-core-rank-01 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: push_swap",
		"description": "This project involves sorting data on a stack, with a limited set of instructions, and the smallest number of moves. To make this happen, you will have to manipulate various sorting algorithms and choose the most appropriate solution(s) for optimized data sorting.",
		"slug": "42cursus-push_swap"
	},
	{
		"state": "done",
		"final_mark": 125,
		"id": 852,
		"kind": "project",
		"name": "get_next_line",
		"x": 3001,
		"y": 3165,
		"by": [],
		"project_id": 1327,
		"difficulty": 882,
		"duration": "about 70 hours",
		"rules": "You must have validated any of quests: common-core-rank-00 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: get_next_line",
		"description": "May it be a file, stdin, or even later a network connection, you will always need a way to read content line by line. It is time to start working on this function, which will be essential for your future projects.",
		"slug": "42cursus-get_next_line"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 5337,
		"kind": "project",
		"name": "Born2beroot",
		"x": 2859,
		"y": 2919,
		"by": [],
		"project_id": 1994,
		"difficulty": 577,
		"duration": "about 40 hours",
		"rules": "You must have validated any of quests: common-core-rank-00 and 42-to-42cursus-transfert. You must not have validated roger-skyline-1",
		"description": "This project aims to introduce you to the wonderful world of virtualization.",
		"slug": "born2beroot"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 851,
		"kind": "project",
		"name": "ft_printf",
		"x": 3144,
		"y": 2916,
		"by": [],
		"project_id": 1316,
		"difficulty": 882,
		"duration": "about 70 hours",
		"rules": "You must have validated any of quests: common-core-rank-00 and 42-to-42cursus-transfert. You must not have those projects ongoing or validated: ft_printf",
		"description": "This project is pretty straightforward, you have to recode printf. You will learn what is and how to implement variadic functions. Once you validate it, you will reuse this function in your future projects. ",
		"slug": "42cursus-ft_printf"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 953,
		"kind": "project",
		"name": "ft_linux",
		"x": 4049,
		"y": 2759,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						4049,
						2759
					],
					[
						3969,
						2766
					]
				]
			}
		],
		"project_id": 1415,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "The first project of the Kernel branch! This is a simple LFS so that you can build your own distribution which will be used in the next projects",
		"slug": "42cursus-ft_linux"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 975,
		"kind": "project",
		"name": "n-puzzle",
		"x": 1866,
		"y": 3029,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1866,
						3029
					],
					[
						2002,
						3028
					]
				]
			}
		],
		"project_id": 1385,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "We are going to do, in any language, a program capable to solve n-puzzles of various sizes, as optimized as possible",
		"slug": "42cursus-n-puzzle"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5960,
		"kind": "project",
		"name": "matrix",
		"x": 1852,
		"y": 2803,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1852,
						2803
					],
					[
						2021,
						2798
					]
				]
			}
		],
		"project_id": 2077,
		"difficulty": 7000,
		"duration": "about 10 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "You've probably encountered vectors and vector spaces before. Now it's time to formalize them through Linear Algebra and to learn how matrices and linear transformations work.",
		"slug": "matrix"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1009,
		"kind": "project",
		"name": "dr-quine",
		"x": 3033,
		"y": 1924,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3033,
						1924
					],
					[
						3123,
						1924
					]
				]
			}
		],
		"project_id": 1418,
		"difficulty": 2520,
		"duration": "about 2 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "This small algo project will get you acquainted with auto-replication problems and confront the Kleene recursion theorem.",
		"slug": "42cursus-dr-quine"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 984,
		"kind": "project",
		"name": "taskmaster",
		"x": 4160,
		"y": 3386,
		"by": [
			{
				"parent_id": 1324,
				"points": [
					[
						4160,
						3386
					],
					[
						3947,
						3309
					]
				]
			}
		],
		"project_id": 1381,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This program is a job control task, in any language. The project is very close to the supervisor program on your computer",
		"slug": "42cursus-taskmaster"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 877,
		"kind": "exam",
		"name": "Exam Rank 03",
		"x": 2783,
		"y": 2541,
		"by": [],
		"project_id": 1321,
		"difficulty": 0,
		"duration": "about 0 days",
		"rules": "You must have finished quest(s) common-core-rank-02. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "",
		"slug": "exam-rank-03"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 995,
		"kind": "project",
		"name": "ft_traceroute",
		"x": 2549,
		"y": 1849,
		"by": [
			{
				"parent_id": 1397,
				"points": [
					[
						2549,
						1849
					],
					[
						2799,
						1847
					]
				]
			}
		],
		"project_id": 1399,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have validated 1 of ft_ping and 42cursus-ft_ping. You must have finished quest(s) common-core",
		"description": "Re-coding the traceroute command will be the opportunity to deepen your knowledge of TCP/IP networks by following the paths of an IP packet from one machine to another.",
		"slug": "42cursus-ft_traceroute"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1079,
		"kind": "project",
		"name": "Internship I",
		"x": 2241,
		"y": 4160,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2241,
						4160
					],
					[
						2314,
						4226
					]
				]
			}
		],
		"project_id": 1638,
		"difficulty": 42000,
		"duration": "about 120 days",
		"rules": "You must have validated 1 of exam-rank-06 and c-exam-alone-in-the-dark-beginner. You must not have those projects ongoing or validated: 42cursus-startup-internship and internship-ii. You must have finished quest(s) common-core",
		"description": " Your first step in a company is an important milestone of your 42 training. This internship entails discovering the professional world and putting your work and adaptation skills at the service of the market. This is a first element for your resume and the opportunity to see emerge your future domain of interest. ",
		"slug": "internship-i"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1001,
		"kind": "project",
		"name": "rubik",
		"x": 1866,
		"y": 3128,
		"by": [],
		"project_id": 1393,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "Non-trivial algorithm project: create a Rubik’s cube solver. You can choose the language you want for this project.",
		"slug": "42cursus-rubik"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1030,
		"kind": "project",
		"name": "lem_in",
		"x": 1864,
		"y": 2932,
		"by": [],
		"project_id": 1470,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "Your ant colony must move from on point to another. How do you do it in the shortest time possible? This project will get you acquainted with graph traversal algorithms: your program will have to intelligently select paths and precise movements used by the ants",
		"slug": "42cursus-lem_in"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1012,
		"kind": "project",
		"name": "matt-daemon",
		"x": 4325,
		"y": 3440,
		"by": [
			{
				"parent_id": 1381,
				"points": [
					[
						4325,
						3440
					],
					[
						4160,
						3386
					]
				]
			}
		],
		"project_id": 1420,
		"difficulty": 9450,
		"duration": "about 49 hours",
		"rules": "You must have validated 42cursus-taskmaster. You must have finished quest(s) common-core",
		"description": "A Unix project to create a daemon of type server. This server will listen on a given port and interpret a list of commands.",
		"slug": "42cursus-matt-daemon"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 6041,
		"kind": "project",
		"name": "ft_kalman",
		"x": 1707,
		"y": 2802,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1707,
						2802
					],
					[
						1811,
						2803
					]
				]
			}
		],
		"project_id": 2098,
		"difficulty": 16800,
		"duration": "about 210 hours",
		"rules": "You must have validated matrix. You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Aboard a generic vehicle with flawed sensors, you will need to create a kalman filter in order to track his position coordinates. This project is a good introduction to signal filtering, matrix operations, gaussian noise and correlation.",
		"slug": "ft_kalman"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1027,
		"kind": "project",
		"name": "malloc",
		"x": 4173,
		"y": 3171,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						4173,
						3171
					],
					[
						3988,
						3139
					]
				]
			}
		],
		"project_id": 1468,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "What’s the deal with malloc? You’ve been using it since the piscine C but it’s not a system call. Find out the workings behind optimum memory management and recode it, as well as free and realloc.",
		"slug": "42cursus-malloc"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 990,
		"kind": "project",
		"name": "ft_shield",
		"x": 3385,
		"y": 1827,
		"by": [
			{
				"parent_id": 1419,
				"points": [
					[
						3385,
						1827
					],
					[
						3126,
						1827
					]
				]
			}
		],
		"project_id": 1447,
		"difficulty": 15750,
		"duration": "about 28 days",
		"rules": "You must have validated 42cursus-woody-woodpacker. You must have finished quest(s) common-core",
		"description": "Use your skills to create a daemon to create your first basic trojan.",
		"slug": "42cursus-ft_shield"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 963,
		"kind": "project",
		"name": "kfs-1",
		"x": 4166,
		"y": 2857,
		"by": [
			{
				"parent_id": 1416,
				"points": [
					[
						4166,
						2857
					],
					[
						4165,
						2645
					]
				]
			}
		],
		"project_id": 1425,
		"difficulty": 15750,
		"duration": "about 42 days",
		"rules": "You must have validated 42cursus-little-penguin-1",
		"description": "Discover the world of \"Kernel Programming\" and learn how to create your very own Kernel from scratch.",
		"slug": "42cursus-kfs-1"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 6035,
		"kind": "project",
		"name": "tinky-winkey",
		"x": 3287,
		"y": 1933,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3287,
						1933
					],
					[
						3263,
						2033
					]
				]
			}
		],
		"project_id": 2097,
		"difficulty": 16800,
		"duration": "about 210 hours",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Introduction to windows operating system by creating a service that run a keylogger.",
		"slug": "tinky-winkey"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 954,
		"kind": "project",
		"name": "ft_ssl_des",
		"x": 2793,
		"y": 1551,
		"by": [
			{
				"parent_id": 1451,
				"points": [
					[
						2793,
						1551
					],
					[
						2792,
						1659
					]
				]
			}
		],
		"project_id": 1452,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-ft_ssl_md5",
		"description": "You will recode part of the OpenSSL program, specifically BASE64, DES-ECB and DES-CBC.",
		"slug": "42cursus-ft_ssl_des"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 955,
		"kind": "project",
		"name": "ft_ssl_md5",
		"x": 2792,
		"y": 1659,
		"by": [
			{
				"parent_id": 1397,
				"points": [
					[
						2792,
						1659
					],
					[
						2799,
						1847
					]
				]
			}
		],
		"project_id": 1451,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have validated 42cursus-ft_ping. You must have finished quest(s) common-core",
		"description": "You will recode part of the OpenSSL program, specifically the MD5 Hashing Algorithm.",
		"slug": "42cursus-ft_ssl_md5"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 994,
		"kind": "project",
		"name": "ft_ping",
		"x": 2799,
		"y": 1847,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2799,
						1847
					],
					[
						2809,
						2020
					]
				]
			}
		],
		"project_id": 1397,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Re-coding the ping command will let you get acquainted with TCP/IP communication between two machines on a network",
		"slug": "42cursus-ft_ping"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1034,
		"kind": "project",
		"name": "corewar",
		"x": 3566,
		"y": 1957,
		"by": [],
		"project_id": 1475,
		"difficulty": 17500,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project involves creating a virtual arena, and having simplistic-language programs fight each other. You will thus get acquainted with VM conception (with instructions it recognizes, registers, etc) and compilation problems of an assembly language in bytecode. In bonus, the pleasure to have your champions fight in the arena.",
		"slug": "42cursus-corewar"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 988,
		"kind": "project",
		"name": "death",
		"x": 3115,
		"y": 1500,
		"by": [
			{
				"parent_id": 1444,
				"points": [
					[
						3115,
						1500
					],
					[
						3386,
						1499
					]
				]
			}
		],
		"project_id": 1445,
		"difficulty": 35700,
		"duration": "about 21 days",
		"rules": "You must have validated 42cursus-war. You must have finished quest(s) common-core",
		"description": "Last virus project. Create with your Famine, Pestilence and War a real metamorphic code.",
		"slug": "42cursus-death"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 987,
		"kind": "project",
		"name": "computorv1",
		"x": 1992,
		"y": 2616,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						1992,
						2616
					],
					[
						2067,
						2647
					]
				]
			}
		],
		"project_id": 1382,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "The goal of this project is to get acquainted with handling elementary math tools that may be helpful for other 42 projects. You will not “do math for doing math”, but to develop a progressive and relaxed approach to projects where these tools are needed. You can choose the language of your choice for this subject.",
		"slug": "42cursus-computorv1"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 949,
		"kind": "project",
		"name": "expert-system",
		"x": 1607,
		"y": 3145,
		"by": [
			{
				"parent_id": 1385,
				"points": [
					[
						1607,
						3145
					],
					[
						1867,
						3031
					]
				]
			}
		],
		"project_id": 1384,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 1 of 42cursus-lem_in, 42cursus-rubik, and 42cursus-n-puzzle",
		"description": "This project involves creating, in the language of your choice, an expert system in proposal calculation. In other words, a program that can reason on a set of rules and initial facts to deduce other facts.",
		"slug": "42cursus-expert-system"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 959,
		"kind": "project",
		"name": "gomoku",
		"x": 1597,
		"y": 2918,
		"by": [
			{
				"parent_id": 1385,
				"points": [
					[
						1597,
						2918
					],
					[
						1860,
						3032
					]
				]
			}
		],
		"project_id": 1383,
		"difficulty": 25200,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 1 of 42cursus-lem_in, 42cursus-rubik, and 42cursus-n-puzzle",
		"description": "This project involves creating, in the language of your choice, a Gomoku game integrating an AI player capable of beating a human player the fastest way possible. To do this, you will implement a min-max algorithm but also do research, trial and error to find the most adapted heuristics. This will not be as easy as checkers.",
		"slug": "42cursus-gomoku"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 945,
		"kind": "project",
		"name": "avaj-launcher",
		"x": 3916,
		"y": 3558,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3916,
						3558
					],
					[
						3853,
						3512
					]
				]
			}
		],
		"project_id": 1435,
		"difficulty": 4200,
		"duration": "about 50 hours",
		"rules": "You must have finished quest(s) common-core",
		"description": "First projet of the Java projects arc. Implementation of a simple Java program according to a given class diagram written in UML.",
		"slug": "42cursus-avaj-launcher"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1037,
		"kind": "project",
		"name": "ft_ls",
		"x": 4075,
		"y": 3261,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						4075,
						3261
					],
					[
						4003,
						3144
					]
				]
			}
		],
		"project_id": 1479,
		"difficulty": 4200,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "For knowing the filesystem inside out, and how files and directories are sorted, you will code by yourself one of the most used command: ls.",
		"slug": "42cursus-ft_ls"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1024,
		"kind": "project",
		"name": "lem-ipc",
		"x": 4320,
		"y": 3199,
		"by": [
			{
				"parent_id": 1468,
				"points": [
					[
						4320,
						3199
					],
					[
						4173,
						3171
					]
				]
			}
		],
		"project_id": 1464,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have validated 42cursus-malloc. You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "You have already seen communication between processes on a network via TCP/IP. You are now going to use other UNIX tools so that processes can communicate locally. You will discover these tools by creating a client of a classic boardgame.",
		"slug": "42cursus-lem-ipc"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 993,
		"kind": "project",
		"name": "ft_nmap",
		"x": 2542,
		"y": 1446,
		"by": [
			{
				"parent_id": 1399,
				"points": [
					[
						2542,
						1446
					],
					[
						2549,
						1849
					]
				]
			}
		],
		"project_id": 1400,
		"difficulty": 15750,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-ft_traceroute",
		"description": "Re-coding the nmap command will be the opportunity to deepen your knowledge of TCP/IP networks and thus understand advanced use of threads in real life.",
		"slug": "42cursus-ft_nmap"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 951,
		"kind": "project",
		"name": "fix-me",
		"x": 4143,
		"y": 3727,
		"by": [
			{
				"parent_id": 1436,
				"points": [
					[
						4143,
						3727
					],
					[
						4035,
						3648
					]
				]
			}
		],
		"project_id": 1437,
		"difficulty": 15750,
		"duration": "about 196 hours",
		"rules": "You must have finished quest(s) common-core and 42-to-42cursus-transfert. You must have validated 42cursus-swingy",
		"description": "Final project of the Java Programming arc. Write a program that simulates stock exchanges and deals with trading algorithms, with networking and socket implementations. ",
		"slug": "42cursus-fix-me"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1007,
		"kind": "project",
		"name": "little-penguin-1",
		"x": 4172,
		"y": 2682,
		"by": [
			{
				"parent_id": 1415,
				"points": [
					[
						4172,
						2682
					],
					[
						4049,
						2759
					]
				]
			}
		],
		"project_id": 1416,
		"difficulty": 9450,
		"duration": "about 100 hours",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-ft_linux",
		"description": "The start of a series of challenges inspired by Eudyptula. You will get acquainted with many points of Kernel development.",
		"slug": "42cursus-little-penguin-1"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 983,
		"kind": "project",
		"name": "swingy",
		"x": 4035,
		"y": 3648,
		"by": [
			{
				"parent_id": 1435,
				"points": [
					[
						4035,
						3648
					],
					[
						3916,
						3558
					]
				]
			}
		],
		"project_id": 1436,
		"difficulty": 9450,
		"duration": "about 98 hours",
		"rules": "You must have validated 42cursus-avaj-launcher. You must have finished quest(s) common-core",
		"description": "This is the second project from the Java world at 42. You will learn to develop GUI applications with the SWING framework, in order to create an RPG game.",
		"slug": "42cursus-swingy"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5189,
		"kind": "project",
		"name": "Startup Internship",
		"x": 1983,
		"y": 4164,
		"by": [],
		"project_id": 1662,
		"difficulty": 42000,
		"duration": "about 120 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert. You must have validated 1 of exam-rank-06 and c-exam-alone-in-the-dark-beginner. You must not have validated more than 2 of internship-i, internship-ii, part_time-i, part_time-ii, apprentissage-2-ans-2eme-annee, and apprentissage-1-an",
		"description": "A good professional integration remains one of the fundamental objectives of the school. This project offers you the possibility of founding a startup and work on it as a full-time job for the next months.",
		"slug": "42cursus-startup-internship"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 880,
		"kind": "exam",
		"name": "Exam Rank 06",
		"x": 2275,
		"y": 2361,
		"by": [],
		"project_id": 1324,
		"difficulty": 0,
		"duration": "about 0 days",
		"rules": "You must have finished quest(s) common-core-rank-05. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "",
		"slug": "exam-rank-06"
	},
	{
		"state": "available",
		"final_mark": null,
		"id": 879,
		"kind": "exam",
		"name": "Exam Rank 05",
		"x": 3715,
		"y": 2583,
		"by": [],
		"project_id": 1323,
		"difficulty": 0,
		"duration": "about 0 days",
		"rules": "You must have finished quest(s) common-core-rank-04. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "",
		"slug": "exam-rank-05"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 878,
		"kind": "exam",
		"name": "Exam Rank 04",
		"x": 3577,
		"y": 3333,
		"by": [],
		"project_id": 1322,
		"difficulty": 0,
		"duration": "about 0 days",
		"rules": "You must have validated any of quests: common-core-rank-03. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "",
		"slug": "exam-rank-04"
	},
	{
		"state": "done",
		"final_mark": 100,
		"id": 876,
		"kind": "exam",
		"name": "Exam Rank 02",
		"x": 3017,
		"y": 3330,
		"by": [],
		"project_id": 1320,
		"difficulty": 0,
		"duration": "about 0 days",
		"rules": "You must have finished quest(s) common-core-rank-01. You must not have validated any of quests 42-to-42cursus-transfert",
		"description": "",
		"slug": "exam-rank-02"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 861,
		"kind": "project",
		"name": "libasm",
		"x": 3960,
		"y": 2368,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						3960,
						2368
					],
					[
						3838,
						2456
					]
				]
			}
		],
		"project_id": 1330,
		"difficulty": 966,
		"duration": "about 70 hours",
		"rules": "You must have finished quest(s) common-core",
		"description": "The aim of this project is to get familiar with assembly language.\n",
		"slug": "libasm"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1087,
		"kind": "project",
		"name": "Open Project",
		"x": 2668,
		"y": 4055,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						2668,
						4055
					],
					[
						2704,
						3953
					]
				]
			}
		],
		"project_id": 1635,
		"difficulty": 31500,
		"duration": "about 180 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "Ce projet est l'occasion d'aborder la gestion de projet sur le long terme, autour d'un sujet qui vous tient à coeur.  Vous êtes entièrement libres dans le choix du sujet - ça peut être en lien avec l'informatique, ou être entièrement autre chose !  Vos seules contraintes sont 1) de travailler en groupe avec d'autres étudiants de 42, 2) de réaliser votre projet sur une période de 5 mois.",
		"slug": "open-project"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 948,
		"kind": "project",
		"name": "drivers-and-interrupts",
		"x": 4179,
		"y": 2479,
		"by": [
			{
				"parent_id": 1416,
				"points": [
					[
						4179,
						2479
					],
					[
						4172,
						2682
					]
				]
			}
		],
		"project_id": 1422,
		"difficulty": 15750,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-little-penguin-1",
		"description": "Learn how to connect a driver to your kernel. We will use a keyboard driver for this project.",
		"slug": "42cursus-drivers-and-interrupts"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1026,
		"kind": "project",
		"name": "nm",
		"x": 4101,
		"y": 3065,
		"by": [
			{
				"parent_id": 0,
				"points": [
					[
						4101,
						3065
					],
					[
						4004,
						3143
					]
				]
			}
		],
		"project_id": 1467,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "Go deep into the format of MacOS executables and understand how the kernel launches binaries by re-writing these two system tools. This is a must for all those who want to work in security. More generally, this project is an opening on UNIX system culture.",
		"slug": "nm"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1000,
		"kind": "project",
		"name": "pestilence",
		"x": 3388,
		"y": 1656,
		"by": [
			{
				"parent_id": 1430,
				"points": [
					[
						3388,
						1656
					],
					[
						3121,
						1658
					]
				]
			}
		],
		"project_id": 1443,
		"difficulty": 15750,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-famine",
		"description": "Second virus project. Reuse the Famine base to add a hiding method of your code.",
		"slug": "42cursus-pestilence"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1010,
		"kind": "project",
		"name": "woody-woodpacker",
		"x": 3126,
		"y": 1827,
		"by": [
			{
				"parent_id": 1467,
				"points": [
					[
						3126,
						1827
					],
					[
						3126,
						2009
					]
				]
			}
		],
		"project_id": 1419,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "A logical follow-up project on nm/otools that is designed to modify the headers of a ELF64 file. The goal here is to add a chunk of code and hide a non-stripped part of a file.",
		"slug": "42cursus-woody-woodpacker"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 978,
		"kind": "project",
		"name": "process-and-memory",
		"x": 4301,
		"y": 2533,
		"by": [
			{
				"parent_id": 1416,
				"points": [
					[
						4301,
						2533
					],
					[
						4172,
						2682
					]
				]
			}
		],
		"project_id": 1421,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-little-penguin-1",
		"description": "An introduction to syscalls and memory management within linux kernel",
		"slug": "42cursus-process-and-memory"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 980,
		"kind": "project",
		"name": "strace",
		"x": 4424,
		"y": 3332,
		"by": [
			{
				"parent_id": 1464,
				"points": [
					[
						4424,
						3332
					],
					[
						4320,
						3199
					]
				]
			}
		],
		"project_id": 1388,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-lem-ipc",
		"description": "First step in a serie of projects in C language leading to creation of a mini-GDB, this project will ask you to recode strace, a tool allowing you to list syscalls done by a running program",
		"slug": "42cursus-strace"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1004,
		"kind": "project",
		"name": "war",
		"x": 3386,
		"y": 1499,
		"by": [
			{
				"parent_id": 1443,
				"points": [
					[
						3386,
						1499
					],
					[
						3388,
						1656
					]
				]
			}
		],
		"project_id": 1444,
		"difficulty": 35700,
		"duration": "about 28 days",
		"rules": "You must have validated 42cursus-pestilence",
		"description": "Third virus project. Reuse Pestilence, and manage to have your binary modify its signature on runtime.",
		"slug": "42cursus-war"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1017,
		"kind": "project",
		"name": "famine",
		"x": 3121,
		"y": 1658,
		"by": [
			{
				"parent_id": 1419,
				"points": [
					[
						3121,
						1658
					],
					[
						3126,
						1827
					]
				]
			}
		],
		"project_id": 1430,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-woody-woodpacker",
		"description": "Welcome to the wonderful world of viruses, trojans and other <Insert random antiVirus software>… Your goal here is to put your skills on handling binary files and make your first virus. WARNING: this project is solely for educational purposes!",
		"slug": "42cursus-famine"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1018,
		"kind": "project",
		"name": "computorv2",
		"x": 1840,
		"y": 2566,
		"by": [
			{
				"parent_id": 1382,
				"points": [
					[
						1840,
						2566
					],
					[
						1992,
						2616
					]
				]
			}
		],
		"project_id": 1433,
		"difficulty": 9450,
		"duration": "about 21 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-computorv1",
		"description": "Now that you have programmed your equation solver, it’s time to go further. Computor V2 let’s you create your own calculator in command line, which will integrate your computor V1 as well as functions for matrix calculus, function resolution, calculation with complex numbers, etc.",
		"slug": "42cursus-computorv2"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 972,
		"kind": "project",
		"name": "kfs-x",
		"x": 4787,
		"y": 2756,
		"by": [
			{
				"parent_id": 1441,
				"points": [
					[
						4787,
						2756
					],
					[
						4684,
						2861
					]
				]
			}
		],
		"project_id": 1442,
		"difficulty": 35700,
		"duration": "about 56 hours",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-9",
		"description": "This is the final kernel project. It just requires you to create a complete linux environment. Maybe name your kernel aswell?",
		"slug": "42cursus-kfs-x"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 958,
		"kind": "project",
		"name": "gbmu",
		"x": 3737,
		"y": 1921,
		"by": [],
		"project_id": 1411,
		"difficulty": 31500,
		"duration": "about 60 days",
		"rules": "You must have finished quest(s) common-core",
		"description": "This project involves coding normal and color gameboy emulator. You will become familiar with electronic documentation, better apprehend hardware emulation and understand the inner working of a gameboy as well as roms.",
		"slug": "42cursus-gbmu"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 5865,
		"kind": "project",
		"name": "doom-nukem",
		"x": 3634,
		"y": 1862,
		"by": [],
		"project_id": 1458,
		"difficulty": 15750,
		"duration": "about 42 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert. You must not have validated doom-nukem",
		"description": "Doom Nukem pushes the possibilities of Raycasting much further while bringing a dimension of Game design, so you are going to have to make a mix of Doom and Duke Nukem 3D.  It's up to you to find the one that suits you and that will allow you to add the requested features as well as those you want to see there.",
		"slug": "42cursus-doom-nukem"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1038,
		"kind": "project",
		"name": "nibbler",
		"x": 4456,
		"y": 3129,
		"by": [
			{
				"parent_id": 1464,
				"points": [
					[
						4456,
						3129
					],
					[
						4320,
						3202
					]
				]
			}
		],
		"project_id": 1386,
		"difficulty": 9450,
		"duration": "about 14 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-lem-ipc",
		"description": "This project in C++ will make you recode a Snake where you can switch the interface at run time",
		"slug": "42cursus-nibbler"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1019,
		"kind": "project",
		"name": "userspace_digressions",
		"x": 4084,
		"y": 2546,
		"by": [
			{
				"parent_id": 1416,
				"points": [
					[
						4084,
						2546
					],
					[
						4172,
						2682
					]
				]
			}
		],
		"project_id": 1456,
		"difficulty": 16800,
		"duration": "about 42 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-little-penguin-1",
		"description": "Make your own userspace init binary.",
		"slug": "42cursus-userspace_digressions"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 956,
		"kind": "project",
		"name": "ft_ssl_rsa",
		"x": 2790,
		"y": 1445,
		"by": [
			{
				"parent_id": 1452,
				"points": [
					[
						2790,
						1445
					],
					[
						2793,
						1551
					]
				]
			}
		],
		"project_id": 1450,
		"difficulty": 15750,
		"duration": "about 7 days",
		"rules": "You must have validated 42cursus-ft_ssl_des. You must have finished quest(s) common-core",
		"description": "You will code your own random prime number generator and use it to make private RSA keys.",
		"slug": "42cursus-ft_ssl_rsa"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1080,
		"kind": "project",
		"name": "Internship II",
		"x": 2117,
		"y": 4160,
		"by": [],
		"project_id": 1644,
		"difficulty": 63000,
		"duration": "about 120 days",
		"rules": "You must have validated 1 of first-internship and internship-i. You must be at least level 14 in cursus 42cursus. You must not have validated more than 3 of internship-i, internship-ii, part_time-i, part_time-ii, and 42cursus-startup-internship",
		"description": " Your 42 training should ends on a professional experience: the second internship. This internship is the accomplishment of your journey, and will have you demonstrate your expertise professionally in a company. This will be the springboard for your career. ",
		"slug": "internship-ii"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1023,
		"kind": "project",
		"name": "zappy",
		"x": 3672,
		"y": 2021,
		"by": [],
		"project_id": 1463,
		"difficulty": 25200,
		"duration": "about 42 days",
		"rules": "You must have validated any of quests: common-core and 42-to-42cursus-transfert",
		"description": "You will now create a multi-player game in a TCP/IP network. The game will consist of a server managing the game field, a graphic client which displays the state of the board, and IA clients that connect to the server to pilot a player on the filed. This is a real complete project that will let you express your creativity on top of your technical knowledge.",
		"slug": "42cursus-zappy"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1058,
		"kind": "piscine",
		"name": "Piscine Swift iOS",
		"x": 1963,
		"y": 3926,
		"by": [],
		"project_id": 1486,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-swift-ios"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1056,
		"kind": "piscine",
		"name": "Piscine OCaml",
		"x": 3840,
		"y": 4029,
		"by": [],
		"project_id": 1484,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-ocaml"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1053,
		"kind": "piscine",
		"name": "Piscine PHP Symfony",
		"x": 1431,
		"y": 3669,
		"by": [],
		"project_id": 1481,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core. You must not have those projects ongoing or validated: 42cursus-piscine-ruby-on-rails and 42cursus-piscine-python-django",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-php-symfony"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1055,
		"kind": "piscine",
		"name": "Piscine Python Django",
		"x": 1431,
		"y": 3718,
		"by": [],
		"project_id": 1483,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core. You must not have those projects ongoing or validated: 42cursus-piscine-ruby-on-rails and 42cursus-piscine-php-symfony",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-python-django"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1054,
		"kind": "piscine",
		"name": "Piscine Ruby on Rails",
		"x": 1431,
		"y": 3768,
		"by": [],
		"project_id": 1482,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core. You must not have those projects ongoing or validated: 42cursus-piscine-php-symfony and 42cursus-piscine-python-django",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-ruby-on-rails"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1057,
		"kind": "piscine",
		"name": "Piscine Unity",
		"x": 2933,
		"y": 4349,
		"by": [],
		"project_id": 1485,
		"difficulty": 9450,
		"duration": null,
		"rules": "You must have finished quest(s) common-core",
		"description": "Piscines are an important time in your cursus, during which you will have the occasion to learn a new language, or even a new paradigm!",
		"slug": "42cursus-piscine-unity"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 998,
		"kind": "project",
		"name": "krpsim",
		"x": 1602,
		"y": 3036,
		"by": [
			{
				"parent_id": 1385,
				"points": [
					[
						1602,
						3036
					],
					[
						1817,
						3033
					]
				]
			}
		],
		"project_id": 1392,
		"difficulty": 9450,
		"duration": "about 7 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 1 of 42cursus-lem_in, 42cursus-n-puzzle, and 42cursus-rubik",
		"description": "This algorithm project consists of creating a program that will optimize rendering of a process graph, with some resource constraints. It’s up to you to explore the existing algorithms and choose, possibly create, what you seem most fit. For this project, you can choose the language you want",
		"slug": "42cursus-krpsim"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 971,
		"kind": "project",
		"name": "kfs-9",
		"x": 4684,
		"y": 2861,
		"by": [
			{
				"parent_id": 1440,
				"points": [
					[
						4684,
						2861
					],
					[
						4687,
						2690
					]
				]
			}
		],
		"project_id": 1441,
		"difficulty": 15750,
		"duration": "about 35 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-8",
		"description": "Create an ELF parser and loader for your kernel.",
		"slug": "42cursus-kfs-9"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 970,
		"kind": "project",
		"name": "kfs-8",
		"x": 4687,
		"y": 2690,
		"by": [
			{
				"parent_id": 1439,
				"points": [
					[
						4687,
						2690
					],
					[
						4554,
						2863
					]
				]
			}
		],
		"project_id": 1440,
		"difficulty": 15750,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-7",
		"description": "Build a module interface for your kernel.",
		"slug": "42cursus-kfs-8"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 968,
		"kind": "project",
		"name": "kfs-6",
		"x": 4554,
		"y": 2691,
		"by": [
			{
				"parent_id": 1432,
				"points": [
					[
						4554,
						2691
					],
					[
						4419,
						2862
					]
				]
			}
		],
		"project_id": 1438,
		"difficulty": 25200,
		"duration": "about 42 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-5",
		"description": "Keep on developping your own kernel. This project will help you set up your own filesystem.",
		"slug": "42cursus-kfs-6"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 967,
		"kind": "project",
		"name": "kfs-5",
		"x": 4419,
		"y": 2862,
		"by": [
			{
				"parent_id": 1431,
				"points": [
					[
						4419,
						2862
					],
					[
						4419,
						2690
					]
				]
			}
		],
		"project_id": 1432,
		"difficulty": 35700,
		"duration": "about 56 days",
		"rules": "You must have validated 42cursus-kfs-4. You must have finished quest(s) common-core",
		"description": "You must now develop process managing in your Kernel, by implementing how to interpret the command :(){ :|:& }",
		"slug": "42cursus-kfs-5"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 966,
		"kind": "project",
		"name": "kfs-4",
		"x": 4419,
		"y": 2690,
		"by": [
			{
				"parent_id": 1426,
				"points": [
					[
						4419,
						2690
					],
					[
						4295,
						2859
					]
				]
			}
		],
		"project_id": 1431,
		"difficulty": 25200,
		"duration": "about 28 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-3",
		"description": "Project aimed at creating an Interrupt Description Table and handle interrupts within your Kernel",
		"slug": "42cursus-kfs-4"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 965,
		"kind": "project",
		"name": "kfs-3",
		"x": 4295,
		"y": 2859,
		"by": [
			{
				"parent_id": 1424,
				"points": [
					[
						4295,
						2859
					],
					[
						4299,
						2683
					]
				]
			}
		],
		"project_id": 1426,
		"difficulty": 35700,
		"duration": "about 42 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-2",
		"description": "Third Kernel from Scratch project. Learn how to manage the memory in you kernel.",
		"slug": "42cursus-kfs-3"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 964,
		"kind": "project",
		"name": "kfs-2",
		"x": 4299,
		"y": 2683,
		"by": [
			{
				"parent_id": 1425,
				"points": [
					[
						4299,
						2683
					],
					[
						4166,
						2857
					]
				]
			}
		],
		"project_id": 1424,
		"difficulty": 15750,
		"duration": "about 42 days",
		"rules": "You must have finished quest(s) common-core. You must have validated 42cursus-kfs-1",
		"description": "Discover the world of Kernel Programming and learn how to create your very own Kernel from scratch.",
		"slug": "42cursus-kfs-2"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 1013,
		"kind": "project",
		"name": "filesystem",
		"x": 4301,
		"y": 2396,
		"by": [
			{
				"parent_id": 1421,
				"points": [
					[
						4301,
						2396
					],
					[
						4301,
						2533
					]
				]
			},
			{
				"parent_id": 1422,
				"points": [
					[
						4301,
						2396
					],
					[
						4179,
						2479
					]
				]
			}
		],
		"project_id": 1423,
		"difficulty": 15750,
		"duration": "about 28 days",
		"rules": "You must have validated 42cursus-process-and-memory and 42cursus-drivers-and-interrupts. You must have finished quest(s) common-core",
		"description": "Create your own filesystem, for your linux kernel.",
		"slug": "42cursus-filesystem"
	},
	{
		"state": "unavailable",
		"final_mark": null,
		"id": 969,
		"kind": "project",
		"name": "kfs-7",
		"x": 4554,
		"y": 2863,
		"by": [
			{
				"parent_id": 1438,
				"points": [
					[
						4554,
						2863
					],
					[
						4554,
						2691
					]
				]
			}
		],
		"project_id": 1439,
		"difficulty": 35700,
		"duration": "about 90 days",
		"rules": "You must have validated 42cursus-kfs-6. You must have finished quest(s) common-core",
		"description": "This project will teach you how to build your own syscalls for your kernel, as well as user accounts, sockets, and a Unix-like hierarchy. Almost a full kernel here!",
		"slug": "42cursus-kfs-7"
	}
]