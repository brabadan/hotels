USE [Hotels]
GO
/****** Object:  Table [dbo].[ReservationsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ReservationsHist]') AND type in (N'U'))
DROP TABLE [dbo].[ReservationsHist]
GO
/****** Object:  Table [dbo].[Reservations]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND type in (N'U'))
DROP TABLE [dbo].[Reservations]
GO
/****** Object:  Table [dbo].[Photos]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Photos]') AND type in (N'U'))
DROP TABLE [dbo].[Photos]
GO
/****** Object:  Table [dbo].[PaymentMethodsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethodsHist]') AND type in (N'U'))
DROP TABLE [dbo].[PaymentMethodsHist]
GO
/****** Object:  Table [dbo].[PaymentMethods]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethods]') AND type in (N'U'))
DROP TABLE [dbo].[PaymentMethods]
GO
/****** Object:  Table [dbo].[Logs]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Logs]') AND type in (N'U'))
DROP TABLE [dbo].[Logs]
GO
/****** Object:  Table [dbo].[Lists]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Lists]') AND type in (N'U'))
DROP TABLE [dbo].[Lists]
GO
/****** Object:  Table [dbo].[ListItemsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ListItemsHist]') AND type in (N'U'))
DROP TABLE [dbo].[ListItemsHist]
GO
/****** Object:  Table [dbo].[ListItems]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ListItems]') AND type in (N'U'))
DROP TABLE [dbo].[ListItems]
GO
/****** Object:  Table [dbo].[HotelsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[HotelsHist]') AND type in (N'U'))
DROP TABLE [dbo].[HotelsHist]
GO
/****** Object:  Table [dbo].[Hotels]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Hotels]') AND type in (N'U'))
DROP TABLE [dbo].[Hotels]
GO
/****** Object:  Table [dbo].[Devices]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Devices]') AND type in (N'U'))
DROP TABLE [dbo].[Devices]
GO
/****** Object:  Table [dbo].[CommentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CommentsHist]') AND type in (N'U'))
DROP TABLE [dbo].[CommentsHist]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Comments]') AND type in (N'U'))
DROP TABLE [dbo].[Comments]
GO
/****** Object:  Table [dbo].[ClientsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ClientsHist]') AND type in (N'U'))
DROP TABLE [dbo].[ClientsHist]
GO
/****** Object:  Table [dbo].[Clients]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Clients]') AND type in (N'U'))
DROP TABLE [dbo].[Clients]
GO
/****** Object:  Table [dbo].[ApartmentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentsHist]') AND type in (N'U'))
DROP TABLE [dbo].[ApartmentsHist]
GO
/****** Object:  Table [dbo].[Apartments]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Apartments]') AND type in (N'U'))
DROP TABLE [dbo].[Apartments]
GO
/****** Object:  Table [dbo].[ApartmentItemsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItemsHist]') AND type in (N'U'))
DROP TABLE [dbo].[ApartmentItemsHist]
GO
/****** Object:  Table [dbo].[ApartmentItems]    Script Date: 8/26/2018 9:51:48 AM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItems]') AND type in (N'U'))
DROP TABLE [dbo].[ApartmentItems]
GO





/****** Object:  Table [dbo].[ApartmentItems]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                            ******/
/****** Таблица элементов номеров отеля - полотенца, приборы, техника и т.п.       ******/
/****** Будет служить для осуществления задачи контроля налчия всего в номере      ******/
/****** отеля по отбытии (или перед прибытием) гостей                              ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItems]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ApartmentItems](
	[ApartmentItemID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]      [datetime]       NOT NULL,
	[ByClientID]      [numeric](18, 0) NOT NULL,
	[ApartmentID]     [numeric](18, 0) NOT NULL,
	[ItemListID]      [numeric](18, 0) NOT NULL,
	[Quantity]        [int]            NOT NULL,
	[CommentID]       [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ApartmentItems] PRIMARY KEY CLUSTERED 
(
	[ApartmentItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ApartmentItemsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                                ******/
/****** Таблица истории изменений элементов номеров отеля                              ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItemsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ApartmentItemsHist](
	[ApartmentItemID] [numeric](18, 0) NOT NULL,
	[InDateTime]      [datetime]       NOT NULL,
	[ByClientID]      [numeric](18, 0) NOT NULL,
	[ApartmentID]     [numeric](18, 0) NOT NULL,
	[ItemListID]      [numeric](18, 0) NOT NULL,
	[Quantity]        [int]            NOT NULL,
	[CommentID]       [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ApartmentItemsHist] PRIMARY KEY CLUSTERED 
(
	[ApartmentItemID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Apartments]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                                 ******/
/****** Таблица номеров отеля - этаж, номер, вместимость, тип, стоимость за ночь и т.п. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Apartments]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Apartments](
	[ApartmentID]         [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]          [datetime]       NOT NULL,
	[ByClientID]          [numeric](18, 0) NOT NULL,
	[HotelID]             [numeric](18, 0) NOT NULL,
	[FloorItemID]         [numeric](18, 0) NOT NULL,
	[ApartmentNumber]     [varchar](50)    NOT NULL,
	[RoomsCount]          [int]            NOT NULL,
	[Capacity]            [int]            NOT NULL,
	[ApartmentTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight]       [numeric](18, 2) NOT NULL,
	[PetsAllowed]         [bit]            NOT NULL,
	[CommentID]           [numeric](18, 0) NOT NULL,
	[OrderNumber]         [int]            NOT NULL,
 CONSTRAINT [PK_Apartments] PRIMARY KEY CLUSTERED 
(
	[ApartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ApartmentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                            ******/
/****** Таблица истории изменений номеров отеля - кто когда и что изменил          ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ApartmentsHist](
	[ApartmentID]         [numeric](18, 0) NOT NULL,
	[InDateTime]          [datetime]       NOT NULL,
	[ByClientID]          [numeric](18, 0) NOT NULL,
	[HotelID]             [numeric](18, 0) NOT NULL,
	[FloorItemID]         [numeric](18, 0) NOT NULL,
	[ApartmentNumber]     [varchar](50)    NOT NULL,
	[RoomsCount]          [int]            NOT NULL,
	[Capacity]            [int]            NOT NULL,
	[ApartmentTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight]       [numeric](18, 2) NOT NULL,
	[PetsAllowed]         [bit]            NOT NULL,
	[CommentID]           [numeric](18, 0) NOT NULL,
	[OrderNumber]         [int]            NOT NULL,
 CONSTRAINT [PK_ApartmentsHist] PRIMARY KEY CLUSTERED 
(
	[ApartmentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Clients]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                     ******/
/****** Таблица клиентов отеля.                                             ******/
/****** Клиентами являеются как непосредственные клиенты отеля, так и       ******/
/****** сотрудники и контактные люди и организации осуществляющие работы    ******/
/****** (ремонт, уборка и т.п.)                                             ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Clients]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Clients](
	[ClientID]         [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]       [datetime]       NOT NULL,
	[ByClientID]       [numeric](18, 0) NOT NULL,
	[LastName]         [varchar](150)   NOT NULL,
	[FirstName]        [varchar](150)   NOT NULL,
	[Phone]            [varchar](500)   NOT NULL,
	[Email]            [varchar](500)   NOT NULL,
	[AddressID]        [numeric](18, 0) NOT NULL,
	[CommentID]        [numeric](18, 0) NOT NULL,
	[ClientTypeItemID] [numeric](18, 0) NOT NULL,
	[PWD]              [varchar](500)   NOT NULL,
 CONSTRAINT [PK_Clients] PRIMARY KEY CLUSTERED 
(
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ClientsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                         ******/
/****** Таблица истории изменений клиентов отеля.                               ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ClientsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ClientsHist](
	[ClientID]         [numeric](18, 0) NOT NULL,
	[InDateTime]       [datetime]       NOT NULL,
	[ByClientID]       [numeric](18, 0) NOT NULL,
	[LastName]         [varchar](150)   NOT NULL,
	[FirstName]        [varchar](150)   NOT NULL,
	[Phone]            [varchar](500)   NOT NULL,
	[Email]            [varchar](500)   NOT NULL,
	[AddressID]        [numeric](18, 0) NOT NULL,
	[CommentID]        [numeric](18, 0) NOT NULL,
	[ClientTypeItemID] [numeric](18, 0) NOT NULL,
	[PWD]              [varchar](500)   NOT NULL,
 CONSTRAINT [PK_ClientsHist] PRIMARY KEY CLUSTERED 
(
	[ClientID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Comments]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                      ******/
/****** Таблица комментариев.                                                ******/
/****** Комментарии выделены в отдельную таблицу, чтобы уменьшить размер     ******/
/****** рабочих таблиц и сделать запросы к ним быстрее                       ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Comments]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Comments](
	[CommentID]  [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime] [datetime]       NOT NULL,
	[ByClientID] [numeric](18, 0) NOT NULL,
	[Comment]    [varchar](max)   NOT NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[CommentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                          ******/
/****** Таблица истории изменений комментариев.                                  ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CommentsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[CommentsHist](
	[CommentID]  [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime]       NOT NULL,
	[ByClientID] [numeric](18, 0) NOT NULL,
	[Comment]    [varchar](max)   NOT NULL,
 CONSTRAINT [PK_CommentsHist] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Devices]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                         ******/
/****** Таблица устройств  .                                                    ******/
/****** Устройства - телефоны, планшеты, компьютеры - используемые клиентами    ******/
/****** для подключения к программе. Определяются и добавляются автоматически,  ******/
/****** в ходе авторизации пользователей                                        ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Devices]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Devices](
	[DeviceID]      [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[DeviceAddress] [varchar](500)   NOT NULL,
	[ClientID]      [numeric](18, 0) NOT NULL,
	[DetectedName]  [varchar](500)   NOT NULL,
	[AlterName]     [varchar](500)   NOT NULL,
 CONSTRAINT [PK_Devices] PRIMARY KEY CLUSTERED 
(
	[DeviceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Hotels]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                    ******/
/****** Таблица отелей.                                                    ******/
/****** Отелем является любой объект, состоящий из "номеров" с которыми    ******/
/****** можно осуществлять операции резервирования и управления (ремонт,   ******/
/****** уборка, и т.п.                                                     ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Hotels]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Hotels](
	[HotelID]    [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime] [datetime]       NOT NULL,
	[ByClientID] [numeric](18, 0) NOT NULL,
	[Name]       [varchar](500)   NOT NULL,
	[AddressID]  [numeric](18, 0) NOT NULL,
	[Phone]      [varchar](500)   NOT NULL,
	[CommentID]  [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_Hotels] PRIMARY KEY CLUSTERED 
(
	[HotelID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[HotelsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                        ******/
/****** Таблица истории изменений отелей.                                      ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[HotelsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[HotelsHist](
	[HotelID]    [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime]       NOT NULL,
	[ByClientID] [numeric](18, 0) NOT NULL,
	[Name]       [varchar](500)   NOT NULL,
	[AddressID]  [numeric](18, 0) NOT NULL,
	[Phone]      [varchar](500)   NOT NULL,
	[CommentID]  [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_HotelsHist] PRIMARY KEY CLUSTERED 
(
	[HotelID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[ListItems]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                       ******/
/****** Таблица элементов различных списков.                                  ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ListItems]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ListItems](
	[ListItemID]  [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]  [datetime]       NOT NULL,
	[ByClientID]  [numeric](18, 0) NOT NULL,
	[ListID]      [numeric](18, 0) NOT NULL,
	[ItemName]    [varchar](500)   NOT NULL,
	[Description] [varchar](500)   NOT NULL,
	[OrderNumber] [int]            NOT NULL,
	[Disabled]    [bit]            NOT NULL,
 CONSTRAINT [PK_ListItems] PRIMARY KEY CLUSTERED 
(
	[ListItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ListItemsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                           ******/
/****** Таблица истории элементов различных списков.                              ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ListItemsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ListItemsHist](
	[ListItemID]  [numeric](18, 0) NOT NULL,
	[InDateTime]  [datetime]       NOT NULL,
	[ByClientID]  [numeric](18, 0) NOT NULL,
	[ListID]      [numeric](18, 0) NOT NULL,
	[ItemName]    [varchar](500)   NOT NULL,
	[Description] [varchar](500)   NOT NULL,
	[OrderNumber] [int]            NOT NULL,
	[Disabled]    [bit]            NOT NULL,
 CONSTRAINT [PK_ListItemsHist] PRIMARY KEY CLUSTERED 
(
	[ListItemID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Lists]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                           ******/
/****** Таблица списков - типы номеров, типы клиентов, этажи, типы объектов и тп. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Lists]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Lists](
	[ListID]      [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ListName]    [varchar](150)   NOT NULL,
	[Description] [varchar](500)   NOT NULL,
 CONSTRAINT [PK_Lists] PRIMARY KEY CLUSTERED 
(
	[ListID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Logs]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                  ******/
/****** Таблица сообщений - ошибки выполнения программы, предупреждающие ******/
/****** сообщения, лог входов в программу и др.                          ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Logs]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Logs](
	[LogID]            [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]       [datetime]       NOT NULL,
	[ByClientID]       [numeric](18, 0) NOT NULL,
	[LogTypeItemID]    [numeric](18, 0) NOT NULL,
	[ObjectID]         [numeric](18, 0) NOT NULL,
	[ObjectTypeItemID] [numeric](18, 0) NOT NULL,
	[Message]          [varchar](max)   NOT NULL,
 CONSTRAINT [PK_Logs] PRIMARY KEY CLUSTERED 
(
	[LogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[PaymentMethods]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                            ******/
/****** Таблица способов платежей за номера                                        ******/
/****** Варианты - Наличные, чек, карта МастерКард, Виза и т.п.                    ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethods]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[PaymentMethods](
	[PaymentMethodID]   [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]        [datetime]       NOT NULL,
	[ByClientID]        [numeric](18, 0) NOT NULL,
	[ClientID]          [numeric](18, 0) NOT NULL,
	[PaymentTypeItemID] [numeric](18, 0) NOT NULL,
	[CardNumber]        [varchar](150)       NULL,
	[DateStart]         [datetime]           NULL,
	[DateEnd]           [datetime]           NULL,
	[Code]              [varchar](50)    NOT NULL,
	[NameOn]            [varchar](150)   NOT NULL,
	[CommentID]         [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_PaymentMethods] PRIMARY KEY CLUSTERED 
(
	[PaymentMethodID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[PaymentMethodsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                                ******/
/****** Таблица истории изменений способов платежей за номера                          ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethodsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[PaymentMethodsHist](
	[PaymentMethodID]   [numeric](18, 0) NOT NULL,
	[InDateTime]        [datetime]       NOT NULL,
	[ByClientID]        [numeric](18, 0) NOT NULL,
	[ClientID]          [numeric](18, 0) NOT NULL,
	[PaymentTypeItemID] [numeric](18, 0) NOT NULL,
	[CardNumber]        [varchar](150)       NULL,
	[DateStart]         [datetime]           NULL,
	[DateEnd]           [datetime]           NULL,
	[Code]              [varchar](50)    NOT NULL,
	[NameOn]            [varchar](150)   NOT NULL,
	[CommentID]         [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_PaymentMethodsHist] PRIMARY KEY CLUSTERED 
(
	[PaymentMethodID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Photos]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                    ******/
/****** Таблица фотографий снятых сотрудниками                             ******/
/****** Фотографии номеров, чего-то, что требует ремонта/чистки,           ******/
/****** карт клиентов и т.п.                                               ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Photos]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Photos](
	[PhotoID]          [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]       [datetime]       NOT NULL,
	[ByClientID]       [numeric](18, 0) NOT NULL,
	[ObjectID]         [numeric](18, 0) NOT NULL,
	[ObjectTypeItemID] [numeric](18, 0) NOT NULL,
	[Photo]            [varbinary](max) NOT NULL,
	[CommentID]        [numeric](18, 0) NOT NULL,
	[MainPhoto]        [bit]            NOT NULL,
 CONSTRAINT [PK_Photos] PRIMARY KEY CLUSTERED 
(
	[PhotoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
END
GO



/****** Object:  Table [dbo].[Reservations]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                          ******/
/****** Таблица резервирования номеров отеля                                     ******/
/****** Основная таблица работы отеля                                            ******/
/****** Номера могут резирвироваться как клиентами, так и сотрудниками для       ******/ 
/****** проведения различных мероприятий                                         ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Reservations](
	[ReservationID]         [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[InDateTime]            [datetime]       NOT NULL,
	[ByClientID]            [numeric](18, 0) NOT NULL,
	[ApartmentID]           [numeric](18, 0) NOT NULL,
	[ClientID]              [numeric](18, 0) NOT NULL,
	[PaymentMethodID]       [numeric](18, 0) NOT NULL,
	[DateStart]             [datetime]       NOT NULL,
	[DateEnd]               [datetime]       NOT NULL,
	[RealDateStart]         [datetime]       NOT NULL,
	[RealDateEnd]           [datetime]       NOT NULL,
	[Confirmed]             [bit]            NOT NULL,
	[Closed]                [bit]            NOT NULL,
	[Adults]                [int]            NOT NULL,
	[Kids]                  [int]            NOT NULL,
	[Pets]                  [int]            NOT NULL,
	[ReservationTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight]         [numeric](18, 2) NOT NULL,
	[PriceTotal]            [numeric](18, 2) NOT NULL,
	[Taxes]                 [numeric](18, 2) NOT NULL,
	[Comission]             [numeric](18, 2) NOT NULL,
	[SourceItemID]          [numeric](18, 0) NOT NULL,
	[CommentID]             [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_Reservations] PRIMARY KEY CLUSTERED 
(
	[ReservationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ReservationsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
/******                                                                              ******/
/****** Таблица истории изменений резервирования номеров отеля                       ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ReservationsHist]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ReservationsHist](
	[ReservationID]         [numeric](18, 0) NOT NULL,
	[InDateTime]            [datetime]       NOT NULL,
	[ByClientID]            [numeric](18, 0) NOT NULL,
	[ApartmentID]           [numeric](18, 0) NOT NULL,
	[ClientID]              [numeric](18, 0) NOT NULL,
	[PaymentMethodID]       [numeric](18, 0) NOT NULL,
	[DateStart]             [datetime]       NOT NULL,
	[DateEnd]               [datetime]       NOT NULL,
	[RealDateStart]         [datetime]       NOT NULL,
	[RealDateEnd]           [datetime]       NOT NULL,
	[Confirmed]             [bit]            NOT NULL,
	[Closed]                [bit]            NOT NULL,
	[Adults]                [int]            NOT NULL,
	[Kids]                  [int]            NOT NULL,
	[Pets]                  [int]            NOT NULL,
	[ReservationTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight]         [numeric](18, 2) NOT NULL,
	[PriceTotal]            [numeric](18, 2) NOT NULL,
	[Taxes]                 [numeric](18, 2) NOT NULL,
	[Comission]             [numeric](18, 2) NOT NULL,
	[SourceItemID]          [numeric](18, 0) NOT NULL,
	[CommentID]             [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ReservationsHist] PRIMARY KEY CLUSTERED 
(
	[ReservationID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO



SET IDENTITY_INSERT [dbo].[Lists] ON 
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(1 AS Numeric(18, 0)), N'AppartmentItems', N'Towel ustencil, tv, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(2 AS Numeric(18, 0)), N'AppartmentFloors', N'1st, 2nd, court, backyard, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(3 AS Numeric(18, 0)), N'ClientTypes', N'Client, Manager, Cleaner, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(4 AS Numeric(18, 0)), N'LogTypes', N'Error, Security, Modification of objects, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(5 AS Numeric(18, 0)), N'PaymentTypes', N'MasterCard, Visa, Cash, cheque, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(6 AS Numeric(18, 0)), N'ObjectTypes', N'Used in Photos and Logs. Client, Reservation, Apartment, PaymentMethod, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(7 AS Numeric(18, 0)), N'ReservationTypes', N'Client reservation, cleaning, other works, reparation, etc.')
GO
INSERT [dbo].[Lists] ([ListID], [ListName], [Description]) VALUES (CAST(8 AS Numeric(18, 0)), N'ReservationSources', N'Phone, Booking, Expedia, Self, etc.')
GO
SET IDENTITY_INSERT [dbo].[Lists] OFF
GO



SET IDENTITY_INSERT [dbo].[ListItems] ON 
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(1 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(1 AS Numeric(18, 0)), N'Towel set', N'Towel set', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(2 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(1 AS Numeric(18, 0)), N'Ustencils set', N'Ustencils set', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(3 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(1 AS Numeric(18, 0)), N'TV - 30"', N'TV - 30"', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(4 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'1st', N'1st floor', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(5 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'2nd', N'2nd floor', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(6 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'3rd', N'3rd floor', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(7 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'4th', N'4th floor', 4, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(8 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'5th', N'5th floor', 5, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(9 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'Basement', N'Basement', 6, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(10 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(2 AS Numeric(18, 0)), N'Kitchen', N'Kitchen', 7, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(11 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(3 AS Numeric(18, 0)), N'Client', N'Client making reservation', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(12 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(3 AS Numeric(18, 0)), N'Manager', N'Manager of the hotel', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(13 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(3 AS Numeric(18, 0)), N'Cleaner', N'Cleaner worker, who cleans apartments', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(14 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(3 AS Numeric(18, 0)), N'Plumber', N'Plumber contact ', 4, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(15 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(4 AS Numeric(18, 0)), N'Error', N'Error while executing application', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(16 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(4 AS Numeric(18, 0)), N'Security', N'Messages of login, new connections', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(17 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(5 AS Numeric(18, 0)), N'MasterCard', N'Client pays with MasterCard', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(18 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(5 AS Numeric(18, 0)), N'Visa', N'Clients pays with Visa card', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(19 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(5 AS Numeric(18, 0)), N'Cash', N'Client pays with cash', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(20 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'Client', N'Object - client of the hotel - manager, cleaner, other workers', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(21 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'Apartment', N'Photos of apartments.', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(22 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'ApartmentItem', N'Photos of apartment items', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(23 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'PaymentMethod', N'Photos of payment methods - cards, cheques, etc.', 4, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(24 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'Hotel', N'Photos of hotel', 5, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(25 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'Reservation', N'Messages of reservation changes', 6, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(26 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(7 AS Numeric(18, 0)), N'Reservation', N'Client reservation of an apartment or a room', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(27 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(7 AS Numeric(18, 0)), N'Cleaning', N'Room cleaning service', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(28 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(7 AS Numeric(18, 0)), N'Repration', N'Apartment reserved for a reparation work', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(29 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(8 AS Numeric(18, 0)), N'Phone', N'Reservation is made by phone', 1, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(30 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(8 AS Numeric(18, 0)), N'Booking', N'Reservation is made in booking.com', 2, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(31 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(8 AS Numeric(18, 0)), N'Expedia', N'Reservation is made in Expedia.com', 3, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(32 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(8 AS Numeric(18, 0)), N'InPerson', N'Reservation is made by personal visit of a client', 4, 0)
GO
INSERT [dbo].[ListItems] ([ListItemID], [InDateTime], [ByClientID], [ListID], [ItemName], [Description], [OrderNumber], [Disabled]) VALUES (CAST(33 AS Numeric(18, 0)), CAST(N'2018-08-26T09:40:44.000' AS DateTime), CAST(0 AS Numeric(18, 0)), CAST(6 AS Numeric(18, 0)), N'ListItem', N'Log of add or disable of a list item', 7, 0)
GO
SET IDENTITY_INSERT [dbo].[ListItems] OFF
GO



/****** Object:  Index [IX_ApartmentItems]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItems]') AND name = N'IX_ApartmentItems')
CREATE NONCLUSTERED INDEX [IX_ApartmentItems] ON [dbo].[ApartmentItems]
(
	[ApartmentID] ASC,
	[ItemListID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ApartmentItemsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentItemsHist]') AND name = N'IX_ApartmentItemsHist')
CREATE NONCLUSTERED INDEX [IX_ApartmentItemsHist] ON [dbo].[ApartmentItemsHist]
(
	[ApartmentItemID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Apartments]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Apartments]') AND name = N'IX_Apartments')
CREATE NONCLUSTERED INDEX [IX_Apartments] ON [dbo].[Apartments]
(
	[HotelID] ASC,
	[ApartmentNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Apartments_1]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Apartments]') AND name = N'IX_Apartments_1')
CREATE NONCLUSTERED INDEX [IX_Apartments_1] ON [dbo].[Apartments]
(
	[ApartmentID] ASC,
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ApartmentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ApartmentsHist]') AND name = N'IX_ApartmentsHist')
CREATE NONCLUSTERED INDEX [IX_ApartmentsHist] ON [dbo].[ApartmentsHist]
(
	[ApartmentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Clients]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Clients]') AND name = N'IX_Clients')
CREATE NONCLUSTERED INDEX [IX_Clients] ON [dbo].[Clients]
(
	[LastName] ASC,
	[PWD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ClientsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ClientsHist]') AND name = N'IX_ClientsHist')
CREATE NONCLUSTERED INDEX [IX_ClientsHist] ON [dbo].[ClientsHist]
(
	[ClientID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_CommentsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[CommentsHist]') AND name = N'IX_CommentsHist')
CREATE NONCLUSTERED INDEX [IX_CommentsHist] ON [dbo].[CommentsHist]
(
	[CommentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Devices]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Devices]') AND name = N'IX_Devices')
CREATE UNIQUE NONCLUSTERED INDEX [IX_Devices] ON [dbo].[Devices]
(
	[DeviceAddress] ASC,
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_HotelsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[HotelsHist]') AND name = N'IX_HotelsHist')
CREATE NONCLUSTERED INDEX [IX_HotelsHist] ON [dbo].[HotelsHist]
(
	[HotelID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ListItems]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ListItems]') AND name = N'IX_ListItems')
CREATE NONCLUSTERED INDEX [IX_ListItems] ON [dbo].[ListItems]
(
	[ListID] ASC,
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PaymentMethods]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethods]') AND name = N'IX_PaymentMethods')
CREATE NONCLUSTERED INDEX [IX_PaymentMethods] ON [dbo].[PaymentMethods]
(
	[ClientID] ASC,
	[PaymentTypeItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PaymentMethodsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[PaymentMethodsHist]') AND name = N'IX_PaymentMethodsHist')
CREATE NONCLUSTERED INDEX [IX_PaymentMethodsHist] ON [dbo].[PaymentMethodsHist]
(
	[PaymentMethodID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Photos]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Photos]') AND name = N'IX_Photos')
CREATE NONCLUSTERED INDEX [IX_Photos] ON [dbo].[Photos]
(
	[ObjectID] ASC,
	[ObjectTypeItemID] ASC,
	[MainPhoto] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND name = N'IX_Reservations')
CREATE NONCLUSTERED INDEX [IX_Reservations] ON [dbo].[Reservations]
(
	[ApartmentID] ASC,
	[ReservationTypeItemID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_1]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND name = N'IX_Reservations_1')
CREATE NONCLUSTERED INDEX [IX_Reservations_1] ON [dbo].[Reservations]
(
	[ClientID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_2]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND name = N'IX_Reservations_2')
CREATE NONCLUSTERED INDEX [IX_Reservations_2] ON [dbo].[Reservations]
(
	[PaymentMethodID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_3]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[Reservations]') AND name = N'IX_Reservations_3')
CREATE NONCLUSTERED INDEX [IX_Reservations_3] ON [dbo].[Reservations]
(
	[Closed] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ReservationsHist]    Script Date: 8/26/2018 9:51:48 AM ******/
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'[dbo].[ReservationsHist]') AND name = N'IX_ReservationsHist')
CREATE NONCLUSTERED INDEX [IX_ReservationsHist] ON [dbo].[ReservationsHist]
(
	[ReservationID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItems_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItems_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItems_ItemName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_ItemName]  DEFAULT ((0)) FOR [ItemListID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItems_Quantity]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_Quantity]  DEFAULT ((0)) FOR [Quantity]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItems_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItemsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItemsHist_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_ClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItemsHist_ItemListID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_ItemListID]  DEFAULT ((0)) FOR [ItemListID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItemsHist_Quantity]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_Quantity]  DEFAULT ((0)) FOR [Quantity]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentItemsHist_CommentID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_Floor]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_Floor]  DEFAULT ((0)) FOR [FloorItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Table_1_RoomNumber]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Table_1_RoomNumber]  DEFAULT ('') FOR [ApartmentNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_RoomsCount]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_RoomsCount]  DEFAULT ((0)) FOR [RoomsCount]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_ApartmentType]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_ApartmentType]  DEFAULT ((0)) FOR [ApartmentTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_PricePerNight]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_PetsAllowed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_PetsAllowed]  DEFAULT ((0)) FOR [PetsAllowed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Apartments_OrderNumber]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_OrderNumber]  DEFAULT ((0)) FOR [OrderNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_FloorItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_FloorItemID]  DEFAULT ((0)) FOR [FloorItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_ApartmentNumber]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ApartmentNumber]  DEFAULT ('') FOR [ApartmentNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_RoomsCount]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_RoomsCount]  DEFAULT ((0)) FOR [RoomsCount]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_ApartmentTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ApartmentTypeItemID]  DEFAULT ((0)) FOR [ApartmentTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_PricePerNight]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_PetsAllowed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_PetsAllowed]  DEFAULT ((0)) FOR [PetsAllowed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_CommentID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ApartmentsHist_OrderNumber]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_OrderNumber]  DEFAULT ((0)) FOR [OrderNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Table_1_Name]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Table_1_Name]  DEFAULT ('') FOR [LastName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_FirstName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_FirstName]  DEFAULT ('') FOR [FirstName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_Phone]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Phone]  DEFAULT ('') FOR [Phone]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_Email]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Email]  DEFAULT ('') FOR [Email]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_Address]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Address]  DEFAULT ((0)) FOR [AddressID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_Type]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Type]  DEFAULT ((0)) FOR [ClientTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Clients_PWD]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_PWD]  DEFAULT ('') FOR [PWD]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_ClientID1]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_ClientID1]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_LastName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_LastName]  DEFAULT ('') FOR [LastName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_FirstName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_FirstName]  DEFAULT ('') FOR [FirstName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_Phone]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_Phone]  DEFAULT ('') FOR [Phone]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_Email]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_Email]  DEFAULT ('') FOR [Email]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_AddressID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_AddressID]  DEFAULT ((0)) FOR [AddressID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_CommentID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_ClientTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_ClientTypeItemID]  DEFAULT ((0)) FOR [ClientTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ClientsHist_PWD]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_PWD]  DEFAULT ('') FOR [PWD]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Comments_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Comments] ADD  CONSTRAINT [DF_Comments_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Comments_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Comments] ADD  CONSTRAINT [DF_Comments_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Comments_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Comments] ADD  CONSTRAINT [DF_Comments_Comment]  DEFAULT ('') FOR [Comment]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_CommentsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_CommentsHist_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_ClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_CommentsHist_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_Comment]  DEFAULT ('') FOR [Comment]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Devices_DeviceAddress]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Devices_DeviceAddress]  DEFAULT ('') FOR [DeviceAddress]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Table_1_Name_1]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Table_1_Name_1]  DEFAULT ('') FOR [DetectedName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Devices_AlterName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Devices_AlterName]  DEFAULT ('') FOR [AlterName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_Name]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Name]  DEFAULT ('') FOR [Name]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_Address]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Address]  DEFAULT ((0)) FOR [AddressID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_Phone]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Phone]  DEFAULT ('') FOR [Phone]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Hotels_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_ClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_Name]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_Name]  DEFAULT ('') FOR [Name]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_AddressID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_AddressID]  DEFAULT ((0)) FOR [AddressID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_Phone]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_Phone]  DEFAULT ('') FOR [Phone]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_HotelsHist_CommentID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_ItemName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_ItemName]  DEFAULT ('') FOR [ItemName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_Description]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_Description]  DEFAULT ('') FOR [Description]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_ItemOrder]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_ItemOrder]  DEFAULT ((0)) FOR [OrderNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItems_Disabled]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_Disabled]  DEFAULT ((0)) FOR [Disabled]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_ItemName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_ItemName]  DEFAULT ('') FOR [ItemName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_Description]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_Description]  DEFAULT ('') FOR [Description]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_OrderNumber]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_OrderNumber]  DEFAULT ((0)) FOR [OrderNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ListItemsHist_Disabled]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ListItemsHist] ADD  CONSTRAINT [DF_ListItemsHist_Disabled]  DEFAULT ((0)) FOR [Disabled]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Lists_ListName]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Lists] ADD  CONSTRAINT [DF_Lists_ListName]  DEFAULT ('') FOR [ListName]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Lists_Description]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Lists] ADD  CONSTRAINT [DF_Lists_Description]  DEFAULT ('') FOR [Description]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_DateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_DateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_LogTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_LogTypeItemID]  DEFAULT ((0)) FOR [LogTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_ObjectID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_ObjectID]  DEFAULT ((0)) FOR [ObjectID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_ObjectTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_ObjectTypeItemID]  DEFAULT ((0)) FOR [ObjectTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Logs_Message]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_Message]  DEFAULT ('') FOR [Message]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_ClientID]  DEFAULT ((0)) FOR [ClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_PaymentType]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_PaymentType]  DEFAULT ((0)) FOR [PaymentTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_Number]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Number]  DEFAULT ('') FOR [CardNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_Code]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Code]  DEFAULT ('') FOR [Code]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_NameOn]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_NameOn]  DEFAULT ('') FOR [NameOn]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethods_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_ClientID1]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_ClientID1]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_ClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_PaymentTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_PaymentTypeItemID]  DEFAULT ((0)) FOR [PaymentTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_Number]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_Number]  DEFAULT ('') FOR [CardNumber]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_Code]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_Code]  DEFAULT ('') FOR [Code]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_NameOn]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_NameOn]  DEFAULT ('') FOR [NameOn]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_PaymentMethodsHist_CommentID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_ObjectID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_ObjectID]  DEFAULT ((0)) FOR [ObjectID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_ObjectType]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_ObjectType]  DEFAULT ((0)) FOR [ObjectTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_Comment]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_Comment]  DEFAULT ((0)) FOR [CommentID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Photos_MainPhoto]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_MainPhoto]  DEFAULT ((0)) FOR [MainPhoto]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_ByClientID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_ByClientID]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Confirmed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Confirmed]  DEFAULT ((0)) FOR [Confirmed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Closed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Closed]  DEFAULT ((0)) FOR [Closed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Adults]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Adults]  DEFAULT ((0)) FOR [Adults]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Kids]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Kids]  DEFAULT ((0)) FOR [Kids]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Pets]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Pets]  DEFAULT ((0)) FOR [Pets]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_ReservationTypeID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_ReservationTypeID]  DEFAULT ((0)) FOR [ReservationTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_PricePerNight]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_PriceTotal]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_PriceTotal]  DEFAULT ((0)) FOR [PriceTotal]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Taxes]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Taxes]  DEFAULT ((0)) FOR [Taxes]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Comission]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Comission]  DEFAULT ((0)) FOR [Comission]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_Reservations_Source]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Source]  DEFAULT ((0)) FOR [SourceItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_InDateTime]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_ClientID1]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_ClientID1]  DEFAULT ((0)) FOR [ByClientID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Confirmed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Confirmed]  DEFAULT ((0)) FOR [Confirmed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Closed]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Closed]  DEFAULT ((0)) FOR [Closed]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Adults]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Adults]  DEFAULT ((0)) FOR [Adults]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Kids]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Kids]  DEFAULT ((0)) FOR [Kids]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Pets]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Pets]  DEFAULT ((0)) FOR [Pets]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_ReservationTypeItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_ReservationTypeItemID]  DEFAULT ((0)) FOR [ReservationTypeItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_PricePerNight]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_PriceTotal]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_PriceTotal]  DEFAULT ((0)) FOR [PriceTotal]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Taxes]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Taxes]  DEFAULT ((0)) FOR [Taxes]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_Comission]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Comission]  DEFAULT ((0)) FOR [Comission]
END
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[DF_ReservationsHist_SourceItemID]') AND type = 'D')
BEGIN
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_SourceItemID]  DEFAULT ((0)) FOR [SourceItemID]
END
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'Clients', N'COLUMN',N'AddressID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Used table Comments' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Clients', @level2type=N'COLUMN',@level2name=N'AddressID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'Clients', N'COLUMN',N'ClientTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'CLIENT, CLEANER, RECEPTION, OWNER' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Clients', @level2type=N'COLUMN',@level2name=N'ClientTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'ClientsHist', N'COLUMN',N'AddressID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Used table Comments' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ClientsHist', @level2type=N'COLUMN',@level2name=N'AddressID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'ClientsHist', N'COLUMN',N'ClientTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'CLIENT, CLEANER, RECEPTION, OWNER' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ClientsHist', @level2type=N'COLUMN',@level2name=N'ClientTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'Logs', N'COLUMN',N'ObjectTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Client, Reservation, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Logs', @level2type=N'COLUMN',@level2name=N'ObjectTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'PaymentMethods', N'COLUMN',N'PaymentTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PaymentMethods', @level2type=N'COLUMN',@level2name=N'PaymentTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'PaymentMethodsHist', N'COLUMN',N'PaymentTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PaymentMethodsHist', @level2type=N'COLUMN',@level2name=N'PaymentTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'Photos', N'COLUMN',N'ObjectTypeItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Hotel, Apartment, Client, Reservation, PaymentMethod, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Photos', @level2type=N'COLUMN',@level2name=N'ObjectTypeItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'Reservations', N'COLUMN',N'SourceItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Self, Phone, website, Booking, Expedia, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Reservations', @level2type=N'COLUMN',@level2name=N'SourceItemID'
GO
IF NOT EXISTS (SELECT * FROM sys.fn_listextendedproperty(N'MS_Description' , N'SCHEMA',N'dbo', N'TABLE',N'ReservationsHist', N'COLUMN',N'SourceItemID'))
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Self, Phone, website, Booking, Expedia, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ReservationsHist', @level2type=N'COLUMN',@level2name=N'SourceItemID'
GO
