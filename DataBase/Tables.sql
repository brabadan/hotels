USE [Hotels]
GO
/****** Object:  Table [dbo].[ApartmentItems]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentItems](
	[ApartmentItemID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ApartmentID] [numeric](18, 0) NOT NULL,
	[ItemListID] [numeric](18, 0) NOT NULL,
	[Quantity] [int] NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ApartmentItems] PRIMARY KEY CLUSTERED 
(
	[ApartmentItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApartmentItemsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentItemsHist](
	[ApartmentItemHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ApartmentItemID] [numeric](18, 0) NOT NULL,
	[ApartmentID] [numeric](18, 0) NOT NULL,
	[ItemListID] [numeric](18, 0) NOT NULL,
	[Quantity] [int] NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ApartmentItemsHist] PRIMARY KEY CLUSTERED 
(
	[ApartmentItemHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Apartments]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Apartments](
	[ApartmentID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[HotelID] [numeric](18, 0) NOT NULL,
	[Floor] [varchar](50) NOT NULL,
	[ApartmentNumber] [varchar](50) NOT NULL,
	[RoomsCount] [int] NOT NULL,
	[Capacity] [int] NOT NULL,
	[ApartmentTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight] [numeric](18, 2) NOT NULL,
	[PetsAllowed] [bit] NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[OrderNumber] [int] NOT NULL,
 CONSTRAINT [PK_Apartments] PRIMARY KEY CLUSTERED 
(
	[ApartmentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ApartmentsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ApartmentsHist](
	[ApartmentHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ApartmentID] [numeric](18, 0) NOT NULL,
	[HotelID] [numeric](18, 0) NOT NULL,
	[Floor] [varchar](50) NOT NULL,
	[ApartmentNumber] [varchar](50) NOT NULL,
	[RoomsCount] [int] NOT NULL,
	[Capacity] [int] NOT NULL,
	[ApartmentTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight] [numeric](18, 2) NOT NULL,
	[PetsAllowed] [bit] NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[OrderNumber] [int] NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ApartmentsHist] PRIMARY KEY CLUSTERED 
(
	[ApartmentHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Clients]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Clients](
	[ClientID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[LastName] [varchar](150) NOT NULL,
	[FirstName] [varchar](150) NOT NULL,
	[Phone] [varchar](500) NOT NULL,
	[Email] [varchar](500) NOT NULL,
	[AddressID] [numeric](18, 0) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[ClientTypeItemID] [numeric](18, 0) NOT NULL,
	[PWD] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Clients] PRIMARY KEY CLUSTERED 
(
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ClientsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ClientsHist](
	[ClientHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[LastName] [varchar](150) NOT NULL,
	[FirstName] [varchar](150) NOT NULL,
	[Phone] [varchar](500) NOT NULL,
	[Email] [varchar](500) NOT NULL,
	[AddressID] [numeric](18, 0) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[ClientTypeItemID] [numeric](18, 0) NOT NULL,
	[PWD] [varchar](500) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[InClientID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ClientsHist] PRIMARY KEY CLUSTERED 
(
	[ClientHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[CommentID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[Comment] [varchar](max) NOT NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CommentsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CommentsHist](
	[CommentHistID] [numeric](18, 0) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[Comment] [varchar](max) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_CommentsHist] PRIMARY KEY CLUSTERED 
(
	[CommentHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Devices]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Devices](
	[DeviceID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[DeviceAddress] [varchar](500) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[DetectedName] [varchar](500) NOT NULL,
	[AlterName] [varchar](500) NOT NULL,
 CONSTRAINT [PK_Devices] PRIMARY KEY CLUSTERED 
(
	[DeviceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Hotels]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Hotels](
	[HotelID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[Name] [varchar](500) NOT NULL,
	[AddressID] [numeric](18, 0) NOT NULL,
	[Phone] [varchar](500) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_Hotels] PRIMARY KEY CLUSTERED 
(
	[HotelID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[HotelsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[HotelsHist](
	[HotelHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[HotelID] [numeric](18, 0) NOT NULL,
	[Name] [varchar](500) NOT NULL,
	[AddressID] [numeric](18, 0) NOT NULL,
	[Phone] [varchar](500) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_HotelsHist] PRIMARY KEY CLUSTERED 
(
	[HotelHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ListItems]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ListItems](
	[ListItemID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ListID] [numeric](18, 0) NOT NULL,
	[ItemName] [varchar](500) NOT NULL,
	[OrderNumber] [int] NOT NULL,
	[Disabled] [bit] NOT NULL,
 CONSTRAINT [PK_ListItems] PRIMARY KEY CLUSTERED 
(
	[ListItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lists]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lists](
	[ListID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ListName] [varchar](150) NOT NULL,
 CONSTRAINT [PK_Lists] PRIMARY KEY CLUSTERED 
(
	[ListID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Logs]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Logs](
	[LogID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[LogTypeItemID] [numeric](18, 0) NOT NULL,
	[ObjectID] [numeric](18, 0) NOT NULL,
	[ObjectTypeItemID] [numeric](18, 0) NOT NULL,
	[Message] [varchar](max) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
 CONSTRAINT [PK_Logs] PRIMARY KEY CLUSTERED 
(
	[LogID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentMethods]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentMethods](
	[PaymentMethodID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[PaymentTypeItemID] [numeric](18, 0) NOT NULL,
	[Number] [varchar](150) NULL,
	[DateStart] [datetime] NULL,
	[DateEnd] [datetime] NULL,
	[Code] [varchar](50) NOT NULL,
	[NameOn] [varchar](150) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_PaymentMethods] PRIMARY KEY CLUSTERED 
(
	[PaymentMethodID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentMethodsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentMethodsHist](
	[PaymentMethodHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[PaymentMethodID] [numeric](18, 0) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[PaymentTypeItemID] [numeric](18, 0) NOT NULL,
	[Number] [varchar](150) NULL,
	[DateStart] [datetime] NULL,
	[DateEnd] [datetime] NULL,
	[Code] [varchar](50) NOT NULL,
	[NameOn] [varchar](150) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID1] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_PaymentMethodsHist] PRIMARY KEY CLUSTERED 
(
	[PaymentMethodHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Photos]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Photos](
	[PhotoID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ObjectID] [numeric](18, 0) NOT NULL,
	[ObjectTypeItemID] [numeric](18, 0) NOT NULL,
	[Photo] [varbinary](max) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[MainPhoto] [bit] NOT NULL,
 CONSTRAINT [PK_Photos] PRIMARY KEY CLUSTERED 
(
	[PhotoID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Reservations]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Reservations](
	[ReservationID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ApartmentID] [numeric](18, 0) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[PaymentMethodID] [numeric](18, 0) NOT NULL,
	[DateStart] [datetime] NOT NULL,
	[DateEnd] [datetime] NOT NULL,
	[RealDateStart] [datetime] NOT NULL,
	[RealDateEnd] [datetime] NOT NULL,
	[Closed] [bit] NOT NULL,
	[Adults] [int] NOT NULL,
	[Kids] [int] NOT NULL,
	[Pets] [int] NOT NULL,
	[ReservationTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight] [numeric](18, 2) NOT NULL,
	[PriceTotal] [numeric](18, 2) NOT NULL,
	[Taxes] [numeric](18, 2) NOT NULL,
	[Comission] [numeric](18, 2) NOT NULL,
	[SourceItemID] [numeric](18, 0) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_Reservations] PRIMARY KEY CLUSTERED 
(
	[ReservationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ReservationsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ReservationsHist](
	[ReservationHistID] [numeric](18, 0) IDENTITY(1,1) NOT NULL,
	[ReservationID] [numeric](18, 0) NOT NULL,
	[ApartmentID] [numeric](18, 0) NOT NULL,
	[ClientID] [numeric](18, 0) NOT NULL,
	[PaymentMethodID] [numeric](18, 0) NOT NULL,
	[DateStart] [datetime] NOT NULL,
	[DateEnd] [datetime] NOT NULL,
	[RealDateStart] [datetime] NOT NULL,
	[RealDateEnd] [datetime] NOT NULL,
	[Closed] [bit] NOT NULL,
	[Adults] [int] NOT NULL,
	[Kids] [int] NOT NULL,
	[Pets] [int] NOT NULL,
	[ReservationTypeItemID] [numeric](18, 0) NOT NULL,
	[PricePerNight] [numeric](18, 2) NOT NULL,
	[PriceTotal] [numeric](18, 2) NOT NULL,
	[Taxes] [numeric](18, 2) NOT NULL,
	[Comission] [numeric](18, 2) NOT NULL,
	[SourceItemID] [numeric](18, 0) NOT NULL,
	[CommentID] [numeric](18, 0) NOT NULL,
	[InDateTime] [datetime] NOT NULL,
	[ClientID1] [numeric](18, 0) NOT NULL,
 CONSTRAINT [PK_ReservationsHist] PRIMARY KEY CLUSTERED 
(
	[ReservationHistID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Index [IX_ApartmentItems]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ApartmentItems] ON [dbo].[ApartmentItems]
(
	[ApartmentID] ASC,
	[ItemListID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ApartmentItemsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ApartmentItemsHist] ON [dbo].[ApartmentItemsHist]
(
	[ApartmentItemID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Apartments]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Apartments] ON [dbo].[Apartments]
(
	[HotelID] ASC,
	[ApartmentNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Apartments_1]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Apartments_1] ON [dbo].[Apartments]
(
	[ApartmentID] ASC,
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ApartmentsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ApartmentsHist] ON [dbo].[ApartmentsHist]
(
	[ApartmentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Clients]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Clients] ON [dbo].[Clients]
(
	[LastName] ASC,
	[PWD] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ClientsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ClientsHist] ON [dbo].[ClientsHist]
(
	[ClientID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_CommentsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_CommentsHist] ON [dbo].[CommentsHist]
(
	[CommentID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [IX_Devices]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_Devices] ON [dbo].[Devices]
(
	[DeviceAddress] ASC,
	[ClientID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_HotelsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_HotelsHist] ON [dbo].[HotelsHist]
(
	[HotelID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ListItems]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ListItems] ON [dbo].[ListItems]
(
	[ListID] ASC,
	[OrderNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PaymentMethods]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_PaymentMethods] ON [dbo].[PaymentMethods]
(
	[ClientID] ASC,
	[PaymentTypeItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PaymentMethodsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_PaymentMethodsHist] ON [dbo].[PaymentMethodsHist]
(
	[PaymentMethodID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Photos]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Photos] ON [dbo].[Photos]
(
	[ObjectID] ASC,
	[ObjectTypeItemID] ASC,
	[MainPhoto] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Reservations] ON [dbo].[Reservations]
(
	[ApartmentID] ASC,
	[ReservationTypeItemID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_1]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Reservations_1] ON [dbo].[Reservations]
(
	[ClientID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_2]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Reservations_2] ON [dbo].[Reservations]
(
	[PaymentMethodID] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Reservations_3]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_Reservations_3] ON [dbo].[Reservations]
(
	[Closed] ASC,
	[DateStart] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_ReservationsHist]    Script Date: 8/20/2018 8:58:21 AM ******/
CREATE NONCLUSTERED INDEX [IX_ReservationsHist] ON [dbo].[ReservationsHist]
(
	[ReservationID] ASC,
	[InDateTime] DESC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_ItemName]  DEFAULT ((0)) FOR [ItemListID]
GO
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_Quantity]  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[ApartmentItems] ADD  CONSTRAINT [DF_ApartmentItems_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_ItemListID]  DEFAULT ((0)) FOR [ItemListID]
GO
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_Quantity]  DEFAULT ((0)) FOR [Quantity]
GO
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[ApartmentItemsHist] ADD  CONSTRAINT [DF_ApartmentItemsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_Floor]  DEFAULT ('') FOR [Floor]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Table_1_RoomNumber]  DEFAULT ('') FOR [ApartmentNumber]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_RoomsCount]  DEFAULT ((0)) FOR [RoomsCount]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_ApartmentType]  DEFAULT ((0)) FOR [ApartmentTypeItemID]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_PetsAllowed]  DEFAULT ((0)) FOR [PetsAllowed]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[Apartments] ADD  CONSTRAINT [DF_Apartments_OrderNumber]  DEFAULT ((0)) FOR [OrderNumber]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_Floor]  DEFAULT ('') FOR [Floor]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ApartmentNumber]  DEFAULT ('') FOR [ApartmentNumber]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_RoomsCount]  DEFAULT ((0)) FOR [RoomsCount]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ApartmentTypeItemID]  DEFAULT ((0)) FOR [ApartmentTypeItemID]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_PetsAllowed]  DEFAULT ((0)) FOR [PetsAllowed]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_OrderNumber]  DEFAULT ((0)) FOR [OrderNumber]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[ApartmentsHist] ADD  CONSTRAINT [DF_ApartmentsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Table_1_Name]  DEFAULT ('') FOR [LastName]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_FirstName]  DEFAULT ('') FOR [FirstName]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Phone]  DEFAULT ('') FOR [Phone]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Email]  DEFAULT ('') FOR [Email]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Address]  DEFAULT ((0)) FOR [AddressID]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_Type]  DEFAULT ((0)) FOR [ClientTypeItemID]
GO
ALTER TABLE [dbo].[Clients] ADD  CONSTRAINT [DF_Clients_PWD]  DEFAULT ('') FOR [PWD]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_LastName]  DEFAULT ('') FOR [LastName]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_FirstName]  DEFAULT ('') FOR [FirstName]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_Phone]  DEFAULT ('') FOR [Phone]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_Email]  DEFAULT ('') FOR [Email]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_AddressID]  DEFAULT ((0)) FOR [AddressID]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_ClientTypeItemID]  DEFAULT ((0)) FOR [ClientTypeItemID]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_PWD]  DEFAULT ('') FOR [PWD]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[ClientsHist] ADD  CONSTRAINT [DF_ClientsHist_ClientID1]  DEFAULT ((0)) FOR [InClientID]
GO
ALTER TABLE [dbo].[Comments] ADD  CONSTRAINT [DF_Comments_Comment]  DEFAULT ('') FOR [Comment]
GO
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_Comment]  DEFAULT ('') FOR [Comment]
GO
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[CommentsHist] ADD  CONSTRAINT [DF_CommentsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Devices_DeviceAddress]  DEFAULT ('') FOR [DeviceAddress]
GO
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Table_1_Name_1]  DEFAULT ('') FOR [DetectedName]
GO
ALTER TABLE [dbo].[Devices] ADD  CONSTRAINT [DF_Devices_AlterName]  DEFAULT ('') FOR [AlterName]
GO
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Name]  DEFAULT ('') FOR [Name]
GO
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Address]  DEFAULT ((0)) FOR [AddressID]
GO
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Phone]  DEFAULT ('') FOR [Phone]
GO
ALTER TABLE [dbo].[Hotels] ADD  CONSTRAINT [DF_Hotels_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_Name]  DEFAULT ('') FOR [Name]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_AddressID]  DEFAULT ((0)) FOR [AddressID]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_Phone]  DEFAULT ('') FOR [Phone]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[HotelsHist] ADD  CONSTRAINT [DF_HotelsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_ItemOrder]  DEFAULT ((0)) FOR [OrderNumber]
GO
ALTER TABLE [dbo].[ListItems] ADD  CONSTRAINT [DF_ListItems_Disabled]  DEFAULT ((0)) FOR [Disabled]
GO
ALTER TABLE [dbo].[Lists] ADD  CONSTRAINT [DF_Lists_ListName]  DEFAULT ('') FOR [ListName]
GO
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_LogTypeItemID]  DEFAULT ((0)) FOR [LogTypeItemID]
GO
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_ObjectID]  DEFAULT ((0)) FOR [ObjectID]
GO
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_ObjectTypeItemID]  DEFAULT ((0)) FOR [ObjectTypeItemID]
GO
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_Message]  DEFAULT ('') FOR [Message]
GO
ALTER TABLE [dbo].[Logs] ADD  CONSTRAINT [DF_Logs_DateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_PaymentType]  DEFAULT ((0)) FOR [PaymentTypeItemID]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Number]  DEFAULT ('') FOR [Number]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Code]  DEFAULT ('') FOR [Code]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_NameOn]  DEFAULT ('') FOR [NameOn]
GO
ALTER TABLE [dbo].[PaymentMethods] ADD  CONSTRAINT [DF_PaymentMethods_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_ClientID]  DEFAULT ((0)) FOR [ClientID]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_PaymentTypeItemID]  DEFAULT ((0)) FOR [PaymentTypeItemID]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_Number]  DEFAULT ('') FOR [Number]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_Code]  DEFAULT ('') FOR [Code]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_NameOn]  DEFAULT ('') FOR [NameOn]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_CommentID]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[PaymentMethodsHist] ADD  CONSTRAINT [DF_PaymentMethodsHist_ClientID1]  DEFAULT ((0)) FOR [ClientID1]
GO
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_ObjectID]  DEFAULT ((0)) FOR [ObjectID]
GO
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_ObjectType]  DEFAULT ((0)) FOR [ObjectTypeItemID]
GO
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_Comment]  DEFAULT ((0)) FOR [CommentID]
GO
ALTER TABLE [dbo].[Photos] ADD  CONSTRAINT [DF_Photos_MainPhoto]  DEFAULT ((0)) FOR [MainPhoto]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Closed]  DEFAULT ((0)) FOR [Closed]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Adults]  DEFAULT ((0)) FOR [Adults]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Kids]  DEFAULT ((0)) FOR [Kids]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Pets]  DEFAULT ((0)) FOR [Pets]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_ReservationTypeID]  DEFAULT ((0)) FOR [ReservationTypeItemID]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_PriceTotal]  DEFAULT ((0)) FOR [PriceTotal]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Taxes]  DEFAULT ((0)) FOR [Taxes]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Comission]  DEFAULT ((0)) FOR [Comission]
GO
ALTER TABLE [dbo].[Reservations] ADD  CONSTRAINT [DF_Reservations_Source]  DEFAULT ((0)) FOR [SourceItemID]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Closed]  DEFAULT ((0)) FOR [Closed]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Adults]  DEFAULT ((0)) FOR [Adults]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Kids]  DEFAULT ((0)) FOR [Kids]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Pets]  DEFAULT ((0)) FOR [Pets]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_ReservationTypeItemID]  DEFAULT ((0)) FOR [ReservationTypeItemID]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_PricePerNight]  DEFAULT ((0)) FOR [PricePerNight]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_PriceTotal]  DEFAULT ((0)) FOR [PriceTotal]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Taxes]  DEFAULT ((0)) FOR [Taxes]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_Comission]  DEFAULT ((0)) FOR [Comission]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_SourceItemID]  DEFAULT ((0)) FOR [SourceItemID]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_InDateTime]  DEFAULT (getdate()) FOR [InDateTime]
GO
ALTER TABLE [dbo].[ReservationsHist] ADD  CONSTRAINT [DF_ReservationsHist_ClientID1]  DEFAULT ((0)) FOR [ClientID1]
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Used table Comments' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Clients', @level2type=N'COLUMN',@level2name=N'AddressID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'CLIENT, CLEANER, RECEPTION, OWNER' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Clients', @level2type=N'COLUMN',@level2name=N'ClientTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Used table Comments' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ClientsHist', @level2type=N'COLUMN',@level2name=N'AddressID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'CLIENT, CLEANER, RECEPTION, OWNER' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ClientsHist', @level2type=N'COLUMN',@level2name=N'ClientTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Client, Reservation, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Logs', @level2type=N'COLUMN',@level2name=N'ObjectTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PaymentMethods', @level2type=N'COLUMN',@level2name=N'PaymentTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'PaymentMethodsHist', @level2type=N'COLUMN',@level2name=N'PaymentTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Hotel, Apartment, Client, Reservation, PaymentMethod, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Photos', @level2type=N'COLUMN',@level2name=N'ObjectTypeItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Self, Phone, website, Booking, Expedia, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'Reservations', @level2type=N'COLUMN',@level2name=N'SourceItemID'
GO
EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Self, Phone, website, Booking, Expedia, etc.' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'TABLE',@level1name=N'ReservationsHist', @level2type=N'COLUMN',@level2name=N'SourceItemID'
GO
