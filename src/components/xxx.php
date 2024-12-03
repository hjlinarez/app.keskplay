select 	
						pais.pais,
						ligas.idliga, 
						ligas.liga,
						count(*) as cantidad
				from 	pais, 
						ligas, 
						juegos
				where 	ligas.idpais = pais.idpais and
						juegos.idliga = ligas.idliga and
						juegos.iddeporte = ligas.iddeporte and
						juegos.iddeporte = 2 and
						juegos.fecha >= '2024-09-13' and juegos.fecha <= '2024-09-13' and
						juegos.idlogro = 1 and
						1 = 1  and 
						1 = 1  and
						1 = 1
				group by pais.pais,
						ligas.idliga, 
						ligas.liga
				order by pais.pais, ligas.liga




select 
	juegos.codjuego,
	count(*) as cantidad
from 
	juegos, 
	equipos_juegos 
where 
	juegos.codjuego = equipos_juegos.codjuego and 				
	juegos.idlogro = equipos_juegos.idlogro and 
	juegos.iddeporte = 2 and 
	juegos.fecha > date(now()) 
group by  
juegos.codjuego
